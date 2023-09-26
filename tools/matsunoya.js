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
                return Object.fromEntries([...document.querySelectorAll('p')].filter((p) => p.textContent.includes('カロリー')).pop().innerHTML.split(/<br>/).map((t) => t.split(/／/)));                ;
            });
            item.data.push(nutrient);
            newItems.push(item.data);
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

    allMorning = allMorning.sort((a, b) => a[0] - b[0]);
    allMenu = allMenu.sort((a, b) => a[0] - b[0]);

    fs.writeFileSync('docs/javascripts/menu_list.js', `const MATSUNOYA_MENU_LIST = ${JSON.stringify(allMenu, null, 2)};`, 'utf8');
    fs.writeFileSync('docs/javascripts/morning_list.js', `const MATSUNOYA_MORNING_LIST = ${JSON.stringify(allMorning, null, 2)};`, 'utf8');

    await page.close();
    await browser.close();
}


(async () => {
    await getMenu();
})();
