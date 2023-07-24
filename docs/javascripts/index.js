const show = () => {
    let result = document.getElementById('result');
    result.textContent = "処理中";
    let answer = selectMenu(MATSUNOYA_MENU_LIST, 1000);
    result.textContent = `合計金額: ${answer[1]}円\n---\n${answer[0].map((d) => `${d[0]} ${d[1]}円`).join('\n')}`;
}

const selectMenu = (items, limit) => {
    let sum = 0;
    let selected = [];

    while (items.length !== 0) {
        let selected_index = Math.floor(Math.random() * items.length);
        let selected_item = items[selected_index];
        sum = sum + selected_item[1];
        selected.push(selected_item);
        items = items.filter((item, index) => {
            if (index === selected_index) {
                return false;
            }
            return sum + item[1] <= limit;
        });
    }
    return [selected, sum];
}