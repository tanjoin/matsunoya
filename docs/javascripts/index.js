const show = () => {
    let result = document.getElementById('result');
    let lowCalorie = document.getElementById('low-calorie');
    let sholdPrice = document.getElementById('should-price');
    let setMenu = document.getElementById("set-menu");
    let bowlMenu = document.getElementById("bowl-menu");
    let curryMenu = document.getElementById("curry-menu");
    let morningMenu = document.getElementById("morning-menu");
    result.textContent = "処理中";
    let price = document.getElementById('price-range').value;
    let calorie = document.getElementById('calorie-range').value;
    let answer = selectMenu(morningMenu.checked ? MATSUNOYA_MORNING_LIST : MATSUNOYA_MENU_LIST, price, lowCalorie.checked, sholdPrice.checked, setMenu.checked, bowlMenu.checked, curryMenu.checked, calorie);
    result.textContent = '';
    result.insertAdjacentHTML('afterbegin', decorateHtmlString(answer));
    twttr.widgets.load();
}

const decorateHtmlString = (answer) => {
    return `
    <div class="row justify-content-center row-cols-auto">
        <div class="col">
            <h2>合計金額: ${answer[1]}円</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <h3>注文品</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                ${answer[0].map((d) => `<li class="list-group-item result-item"><h4>${d[0]}</h4>
                <small>
                ${d[1]}円
                ${d[2].カロリー}
                たんぱく質 ${d[2].たんぱく質}
                脂質 ${d[2].脂質}
                炭水化物 ${d[2].炭水化物}
                食塩相当量 ${d[2].食塩相当量}
                </small>
                </li>`).join('\n')}
            </ul>
        </div>
    </div>
        <div class="row mt-2">
            <div class="col">
                <div class="nutrition-panel">
                    <h3 class="nutrition-title">栄養成分</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item"><span class="nutrition-label">カロリー</span><span class="nutrition-value">${answer[2][0]}kcal</span></div>
                        <div class="nutrition-item"><span class="nutrition-label">たんぱく質</span><span class="nutrition-value">${answer[2][1]}g</span></div>
                        <div class="nutrition-item"><span class="nutrition-label">脂質</span><span class="nutrition-value">${answer[2][2]}g</span></div>
                        <div class="nutrition-item"><span class="nutrition-label">炭水化物</span><span class="nutrition-value">${answer[2][3]}g</span></div>
                        <div class="nutrition-item"><span class="nutrition-label">食塩相当量</span><span class="nutrition-value">${answer[2][4]}g</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center row-cols-auto share-row">
      <div class="col">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
           data-text="松のや${document.getElementById('price-range').value}円ガチャを回したよ！\n${decodeURIComponent("\n" + answer[0].map((d) => `・${d[0]} ${d[1]}円`).join('\n'))}\n\n"
           data-url="https://tanjoin.github.io/matsunoya/" 
           data-hashtags="松のや${document.getElementById('price-range').value}円ガチャ"
           data-show-count="false"
           data-size="large"
           id="twitter-btn" 
           class="twitter-share-button">Tweet</a>
      </div>
    </div>
    `;
}

const selectMenu = (items, limit, isU1500kcal, isStrict, isSetMenu, isBowlMenu, isCurryMenu, limitCalorie) => {
    const CALORIE_LIMIT = limitCalorie ? limitCalorie : 1500;
    let sum = 0;
    let selected = [];
    let calorie = tanpaku = shi = tansui = salt = 0;

    if (isU1500kcal) {
        items = items.filter((item) => {
            return parseInt(item[2]["カロリー"]) <= CALORIE_LIMIT;
        });
    }

    items = items.filter((item) => {
        if (item[1] === null) {
            return false;
        }

        if (!isSetMenu && !isBowlMenu && !isCurryMenu) {
            return true;
        }
        if (isSetMenu && item[0].includes("定食")) {
            return true;
        }
        if (isBowlMenu && item[0].includes("丼")) {
            return true;
        }
        if (isCurryMenu && item[0].includes("カレー")) {
            return true;
        }
        return false;
    });

    while (items.length !== 0) {
        let selected_index = Math.floor(Math.random() * items.length);
        let selected_item = items[selected_index];
        if (isStrict && selected_item[1] > limit) {
            items = items.filter((item, index) => index !== selected_index);
            continue;
        }
        sum = sum + selected_item[1];
        calorie = calorie + parseInt(selected_item[2]["カロリー"]);
        tanpaku = tanpaku + parseInt(selected_item[2]["たんぱく質"]);
        shi = shi + parseInt(selected_item[2]["脂質"]);
        tansui = tansui + parseInt(selected_item[2]["炭水化物"]);
        salt = salt + parseInt(selected_item[2]["食塩相当量"]);
        selected.push(selected_item);
        items = items.filter((item, index) => {
            if (index === selected_index) {
                return false;
            }
            let isU1000yen = sum + item[1] <= limit;
            if (isU1500kcal) {
                return isU1000yen && calorie + parseInt(item[2]["カロリー"]) <= CALORIE_LIMIT;
            }
            return isU1000yen;
        });
    }
    return [selected, sum, [calorie, tanpaku, shi, tansui, salt]];
}

/**
 * メニューの表示制御を行うクラス
 * 
 * メニューリストに定食、丼、カレーが含まれているかどうかで
 * それぞれのチェックボックスの表示・非表示を切り替える
 */
class MenuVisibilityController {
    load() {
        MATSUNOYA_MENU_LIST.filter((menu) => menu[0].includes("定食")).length > 0 ? document.getElementById("set-menu-col").style.display = "block" : document.getElementById("set-menu-col").style.display = "none";
        MATSUNOYA_MENU_LIST.filter((menu) => menu[0].includes("丼")).length > 0 ? document.getElementById("bowl-menu-col").style.display = "block" : document.getElementById("bowl-menu-col").style.display = "none";
        MATSUNOYA_MENU_LIST.filter((menu) => menu[0].includes("カレー")).length > 0 ? document.getElementById("curry-menu-col").style.display = "block" : document.getElementById("curry-menu-col").style.display = "none";
    }

    main() {
        document.addEventListener('DOMContentLoaded', () => {
            this.load();
        });
    }
};
new MenuVisibilityController().main();

class CalorieRangeController {
    load() {
        const lowCalorie = document.getElementById('low-calorie');
        const calorieRange = document.getElementById('calorie-range');

        if (!lowCalorie || !calorieRange) {
            return;
        }

        const calorieRangeContainer = calorieRange.closest('.option-range');

        const toggle = () => {
            const isEnabled = lowCalorie.checked;
            calorieRange.disabled = !isEnabled;
            calorieRange.setAttribute('aria-disabled', String(!isEnabled));
            if (calorieRangeContainer) {
                calorieRangeContainer.classList.toggle('is-disabled', !isEnabled);
            }
        };

        lowCalorie.addEventListener('change', toggle);
        toggle();
    }

    main() {
        document.addEventListener('DOMContentLoaded', () => {
            this.load();
        });
    }
}
new CalorieRangeController().main();
