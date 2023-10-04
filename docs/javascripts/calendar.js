let controller = undefined;

window.onload = () => {
    controller = new Controller();
    controller?.show();
    let input = document.getElementById('search-input');
    controller?.subscribeSearch(input);
    controller?.subscribeSort(
        input,
        document.getElementById('btncheck'),
        document.getElementById('btnradio1'),
        document.getElementById('btnradio2'),
        document.getElementById('btnradio3'),
        document.getElementById('btnradio4'),
        document.getElementById('btnradio5'),
        document.getElementById('btnradio6'),
        document.getElementById('btnradio7'),
        document.getElementById('btnradio8'),
        document.getElementById('btnradio9')
    );
};

class Controller {
    constructor() {
        this.menuList = MATSUNOYA_MENU_LIST
            .map((menu) => new Calendar(menu))
            .reverse();
    }

    reset() {
        this.menuList = MATSUNOYA_MENU_LIST
            .map((menu) => new Calendar(menu))
            .reverse();
    }

    show() {
        let calendarRow = document.getElementById('calendar');
        this.menuList
            .forEach((calendar) => calendar.toCard(calendarRow));
    }

    clear() {
        let calendarRow = document.getElementById('calendar');
        for (let i = calendarRow.children.length - 1; i >= 0; i--) {
            calendarRow.removeChild(calendarRow.children[i]);
        }
    }

    subscribeSearch(input) {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.clear();
                let calendarRow = document.getElementById('calendar');
                this.menuList
                    .filter((calendar) => calendar.name.includes(input.value))
                    .forEach((calendar) => calendar.toCard(calendarRow));
            }
        });
    }

    subscribeSort(input, check, r1, r2, r3, r4, r5, r6, r7, r8, r9) {
        check.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            this.menuList.reverse();
            this.menuList
                .filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r1.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            this.reset();
            check.checked ? this.menuList.reverse() : this.menuList;
            this.menuList
                .filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r2.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => a.name.localeCompare(b.name));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r3.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => parseInt(a.nutritionFacts.カロリー) - parseInt(b.nutritionFacts.カロリー));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r4.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => parseFloat(a.nutritionFacts.たんぱく質) - parseFloat(b.nutritionFacts.たんぱく質));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r5.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => parseFloat(a.nutritionFacts.脂質) - parseFloat(b.nutritionFacts.脂質));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r6.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => parseFloat(a.nutritionFacts.炭水化物) - parseFloat(b.nutritionFacts.炭水化物));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r7.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => parseFloat(a.nutritionFacts.食塩相当量) - parseFloat(b.nutritionFacts.食塩相当量));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r8.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => 
                   parseFloat(a.nutritionFacts.たんぱく質) - parseFloat(a.nutritionFacts.脂質)
                - (parseFloat(b.nutritionFacts.たんぱく質) - parseFloat(b.nutritionFacts.脂質)));
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
        r9.addEventListener('click', () => {
            this.clear();
            let calendarRow = document.getElementById('calendar');
            let list = this.menuList.sort((a, b) => a.price - b.price);
            check.checked ? list.reverse() : list;
            list.filter((calendar) => calendar.name.includes(input.value))
                .forEach((calendar) => calendar.toCard(calendarRow));
        });
    }
}

class Calendar {
    constructor(menu) {
        this.menu = menu;
        this.name = menu[0];
        this.price = menu[1];
        this.nutritionFacts = menu[2];
        this.link = menu[3];
    }

    toCard(target) {
        target.insertAdjacentHTML('afterbegin', this.toCardString());
    }

    toCardString() {
        let text = `${encodeURIComponent(this.name + " " + this.nutritionFacts.カロリー)}`;
        let details = `${encodeURIComponent("松のや\nたんぱく質 " + this.nutritionFacts.たんぱく質)}`
                    + `${encodeURIComponent("\n脂質 " + this.nutritionFacts.脂質)}`
                    + `${encodeURIComponent("\n炭水化物 " + this.nutritionFacts.炭水化物)}`
                    + `${encodeURIComponent("\n食塩相当量 " + this.nutritionFacts.食塩相当量)}`
                    + `${encodeURIComponent("\n税込" + this.price + "円\n")}`;
        let location = `${encodeURIComponent(this.link)}}`;
        let dateString = new Date().toISOString().replace(/-|:|\.\d\d\d/g,"");
        let dates = `${dateString}/${dateString}}`;

        return `
        <div class="card col-xl-3 col-lg-4 col-md-6 col-sm-12 bg-light">
            <div class="card-body d-flex flex-column">
                <h3 class="card-title fw-bolder">
                    <a href="${this.link}" target="_blank" class="text-decoration-none text-dark">${this.name}</a>
                </h3>
                <p class="card-subtitle text-secondary mt-auto ms-auto text-end">${this.price}円</p>
                <p class="card-text ms-auto text-end">
                  <span class="fw-bolder fs-5">${this.nutritionFacts.カロリー}</span><br>
                  たんぱく質 ${this.nutritionFacts.たんぱく質}<br>
                  脂質 ${this.nutritionFacts.脂質}<br>
                  炭水化物 ${this.nutritionFacts.炭水化物}<br>
                  食塩相当量 ${this.nutritionFacts.食塩相当量}<br>
                </p>
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&dates=${dates}&location=${location}&text=${text}&details=${details}" target="_blank" class="btn btn-success d-grid">追加</a>
            </div>
        </div>
        `
    }
};