const fs = require('fs');
const puppeteer = require('puppeteer');
const MATSUNOYA_MENU_URL = 'https://www.matsuyafoods.co.jp/matsunoya/menu/';
const MENU_LIST_SELECTOR = '#container > section.section-main-cmn.main-post-cmn.section-menu-matsuya > div.wrapper > ul';
const ITEM_LIST_SELECTOR = '#container > section.section-main-cmn.main-post-cmn.section-menu-matsuya > div > ul';

async function getMenu() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });
    await page.goto(MATSUNOYA_MENU_URL);
    const menuSelector = await page.waitForSelector(MENU_LIST_SELECTOR);
    const menuLinks = await menuSelector?.evaluate((ul) => {
        return [...ul.querySelectorAll('li > a')].map((a) => a.href);
    });

    let allMenu = [];
    let allMorning = [];
    for (link of menuLinks) {
        await page.goto(link);
        let itemSelector = await page.waitForSelector(ITEM_LIST_SELECTOR);
        let items = await itemSelector?.evaluate((ul) => {
          return [...ul.querySelectorAll('li.item')].map((li) => {
                return {
                    data: [
                        li.querySelector('span.txt')?.textContent,
                        parseInt(li.querySelector('.price')?.textContent)
                    ],
                    link: li.querySelector('a').href
                };
          });
        });
        let newItems = [];
        for (item of items) {
            let newPage = await browser.newPage();
            await newPage.goto(item.link);
            let nutrient = await newPage.evaluate(() => {
                let kdata = [...document.querySelectorAll('p')].filter((p) => p.textContent.includes('カロリー'));
                let result = [];
                if (kdata.length > 1) {
                    let subdata = [...document.querySelectorAll('div.article-info > ul li')].map((li) => li.textContent.split('\n').map((t) => t.replace(/\s+/g, "")).filter((t) => t.length > 0));
                    for (let index = 0; index < kdata.length; index++) {
                        const element = kdata[index];
                        let tdata = Object.fromEntries(element.innerHTML.split(/<br>/).map((t) => t.split(/／/)));
                        tdata["category"] = subdata[index][0];
                        tdata["price"] = subdata[index][1];
                        result.push(tdata);
                    }
                    return result;
                } else {
                    return Object.fromEntries(kdata.shift().innerHTML.split(/<br>/).map((t) => t.split(/／/)));
                }
            });
            if (Array.isArray(nutrient)) {
                for (let nu of nutrient) {
                    let d = JSON.parse(JSON.stringify(item.data));
                    d[0] = d[0] + ' ' + nu.category;
                    d[1] = parseInt(nu.price);
                    delete nu.category
                    delete nu.price;
                    d.push(nu);
                    d.push(item.link);
                    newItems.push(d);
                }
            } else {
                item.data.push(nutrient);
                item.data.push(item.link);
                newItems.push(item.data);
            }
        }
        let isMorning = await page.evaluate(() => {
            return document.querySelector('#container > section.section-main-cmn.main-post-cmn.section-menu-matsuya > h1').textContent.includes('朝メニュー');        
        });
        if (isMorning) {
            allMorning = allMorning.concat(newItems);
        } else {
            allMenu = allMenu.concat(newItems);
        }
    }

    fs.writeFileSync('docs/javascripts/menu_list.js', `const MATSUNOYA_MENU_LIST = ${JSON.stringify(allMenu, null, 2)};`, 'utf8');
    fs.writeFileSync('docs/javascripts/morning_list.js', `const MATSUNOYA_MORNING_LIST = ${JSON.stringify(allMorning, null, 2)};`, 'utf8');

    await page.close();
    await browser.close();
}
module.exports = getMenu;

if (require.main === module) (async () => {
    await getMenu();
})();