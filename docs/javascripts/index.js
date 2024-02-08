const show = () => {
    let result = document.getElementById('result');
    let lowCalorie = document.getElementById('low-calorie');
    result.textContent = "処理中";
    let answer = selectMenu(MATSUNOYA_MENU_LIST, 1000, lowCalorie.checked);
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
            <h3>栄養成分</h3>
        </div>
    </div>
    <div class="row">
      <div class="col">
      <ul>
        <li>カロリー ${answer[2][0]}kcal</li>
        <li>たんぱく質 ${answer[2][1]}g</li>
        <li>脂質 ${answer[2][2]}g</li>
        <li>炭水化物 ${answer[2][3]}g</li>
        <li>食塩相当量 ${answer[2][4]}g</li>
      </uL>
      </div>  
    </div>
    <div class="row justify-content-center row-cols-auto">
      <div class="col">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
           data-text="松のや1000円ガチャを回したよ！\n${decodeURIComponent("\n" + answer[0].map((d) => `・${d[0]} ${d[1]}円`).join('\n'))}\n\n"
           data-url="https://tanjoin.github.io/matsunoya/" 
           data-hashtags="松のや1000円ガチャ"
           data-show-count="false"
           data-size="large"
           id="twitter-btn" 
           class="twitter-share-button">Tweet</a>
      </div>
    </div>
    `;
}

const selectMenu = (items, limit, isU1500kcal) => {
    const CALORIE_LIMIT = 1500;
    let sum = 0;
    let selected = [];
    let calorie = tanpaku = shi = tansui = salt = 0;

    if (isU1500kcal) {
        items = items.filter((item) => {
            return parseInt(item[2]["カロリー"]) <= CALORIE_LIMIT;
        });
    }

    while (items.length !== 0) {
        let selected_index = Math.floor(Math.random() * items.length);
        let selected_item = items[selected_index];
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