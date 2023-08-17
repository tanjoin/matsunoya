const show = () => {
    let result = document.getElementById('result');
    result.textContent = "処理中";
    let answer = selectMenu(MATSUNOYA_MENU_LIST, 1000);
    result.textContent = `合計金額: ${answer[1]}円\n---\n${answer[0].map((d) => `${d[0]} ${d[1]}円`).join('\n')}`;
    result.textContent += `\n---\nカロリー: ${answer[2][0]}kcal\nたんぱく質: ${answer[2][1]}g\n脂質: ${answer[2][2]}g\n炭水化物: ${answer[2][3]}g\n食塩相当量: ${answer[2][4]}g`;
}

const selectMenu = (items, limit) => {
    let sum = 0;
    let selected = [];
    let calorie = tanpaku = shi = tansui = salt = 0;

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
            return sum + item[1] <= limit;
        });
    }
    return [selected, sum, [calorie, tanpaku, shi, tansui, salt]];
}