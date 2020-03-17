let click;
//      форма входа
let enterBtn = document.getElementById("enter");
let header = document.querySelector("header");
let enterMobileBtn = document.getElementById("enterMobile");
let numEntDiv = 0;
let cancel;

enterMobileBtn.addEventListener("click", showEnter);
enterBtn.addEventListener("click", showEnter);

function showEnter(e) {
    let enterDiv = document.createElement("div");
    enterDiv.className = "col-12";
    let text = `
    <div class="form-row">
        <div class="form-group col-md-3 offset-5">
            <label for="inputLogin">Login</label>
            <input type="text" class="form-control" placeholder="Login" id="inputLogin">
        </div>
        <div class="form-group col-md-3 offset-1">
            <label for="inputPassword">Password</label>
            <input type="password" class="form-control" placeholder="*******" id="inputPassword">
        </div>
    </div>
    <div class="form-row">
                <div class="col-md-12 text-right">
                    <button type="submit" class="btn btn-primary">Войти</button>
                    <button class="btn btn-primary" id="cancel">Отмена</button>
                </div>
    </div>
    `
    enterDiv.innerHTML = text;
    CloseEnterDiv(enterDiv);
    if (numEntDiv == 0) {
        header.append(enterDiv);
        numEntDiv++;
        cancel = document.getElementById("cancel");
    } else {
        removeEnterDiv();
    }
}

header.addEventListener("click", function (e) {
    if (e.target == cancel) {
        removeEnterDiv();
    }
})

function removeEnterDiv() {
    enterDiv = header.querySelector(".col-12");
    enterDiv.remove();
    numEntDiv--;
}

function CloseEnterDiv(elem) {
    click = 0;
    function outsideClickListener2(event) {
        if (!elem.contains(event.target) && (click != 0)) {                      // проверяем, что клик не по элементу и это не первый клик
            removeEnterDiv();                                                 // скрываем элемент
            document.removeEventListener('click', outsideClickListener2);        // удаляем обработчик
        } else {
            if (!(header.querySelector(".col-12"))) {                                          // если элемент не существует - удаляем обработчик
                document.removeEventListener('click', outsideClickListener2);
            } else {
                click++;
            }
        }
    }
    document.addEventListener('click', outsideClickListener2);
}


/***************************************************************************************/

let signUp = document.getElementById("signUp");
let signBoxing = document.getElementById("signBoxing");
let signMMA = document.getElementById("signMMA");
let signCrossfit = document.getElementById("signCrossfit");
let cancelSign = document.getElementById("cancelSign");

//          запись на тренировку из выпадающего меню
let signTraining = document.getElementById("signTraining");
signTraining.addEventListener("click", showForm);

function show(element) {            /***************            function show()             ****************/
    element.hidden = false;
}

function hide(element) {            /***************            function hide()             ****************/
    element.hidden = true;
}

function showForm(e) {
    e.preventDefault();
    onClickClose(signUp);
    show(signUp);
    training = e.target.dataset.training;
    selectTraining.value = training;
    switchChange();
}

function hideForm(e) {
    e.preventDefault();
    hide(signUp);
}

signBoxing.addEventListener("click", showForm);
signMMA.addEventListener("click", showForm);
signCrossfit.addEventListener("click", showForm);
cancelSign.addEventListener("click", hideForm);

let tableCheck = document.querySelectorAll(".check");
tableCheck.forEach(element => element.addEventListener("click", showForm));
tableCheck.forEach(element => element.addEventListener("click", checkDate));
tableCheck.forEach(element => element.addEventListener("click", setBackground));

function checkDate(e) {
    let dateArr = [0, "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let i = e.target.cellIndex;
    selectDate.value = dateArr[i];
}

let background = document.querySelector("#group4 .back");

function setBackground(e) {
    let backgroundArr = [0,
        "back1",
        "back2",
        "back3",
        "back4"
    ];
    let i = e.target.parentElement.rowIndex;
    background.classList.add(backgroundArr[i]);
    for (let name of background.classList) {
        if (name != backgroundArr[i] && name != "layer") {
            background.classList.remove(name);
        }
    }
}

let textMMA = ` <option>Понедельник</option>
                <option>Среда</option>
                <option>Пятница</option>`;

let textBoxing = `  <option>Понедельник</option>
                    <option>Среда</option>
                    <option>Пятница</option>`;

let textBJJ = `     <option>Вторник</option>
                    <option>Четверг</option>
                    <option>Суббота</option>`;

let textCrossfit = `<option>Вторник</option>
                    <option>Четверг</option>
                    <option>Суббота</option>`;

let selectTraining = document.getElementById("training");
let selectDate = document.getElementById("date");
let training;

function switchChange() {
    date.innerHTML = "";
    switch (selectTraining.value) {
        case "MMA": {
            let selectFragment = document.createRange().createContextualFragment(textMMA);
            date.append(selectFragment);
        }
            break;
    }
    switch (selectTraining.value) {
        case "Boxing": {
            let selectFragment = document.createRange().createContextualFragment(textBoxing);
            date.append(selectFragment);
        }
            break;
    }
    switch (selectTraining.value) {
        case "BJJ": {
            let selectFragment = document.createRange().createContextualFragment(textBJJ);
            date.append(selectFragment);
        }
            break;
    }
    switch (selectTraining.value) {
        case "Crossfit": {
            let selectFragment = document.createRange().createContextualFragment(textCrossfit);
            date.append(selectFragment);
        }
            break;
    }
}

selectTraining.addEventListener("change", switchChange);

/********************************           gymBuy          ********************************/
let gymBuy = document.getElementById("gymBuy");     //цены на обонемент
let gym1 = document.getElementById("gym1");
let gymCheck = document.getElementById("gymCheck");     //личный кабинет
let gym2 = document.getElementById("gym2");

gymBuy.addEventListener("click", showGym1);
gymCheck.addEventListener("click", showGym2);

let abPrice = document.getElementById("abPrice");       //цены на обонемент  из выпадающего списка
abPrice.addEventListener("click", showGym1);
let gymCheckMobile = document.getElementById("gymCheckMobile");     //личный кабинет из выпадающего списка
gymCheckMobile.addEventListener("click", showGym2);

function showGym1(e) {
    e.preventDefault();
    onClickClose(gym1);    
    show(gym1);

}

function showGym2(e) {
    e.preventDefault();
    onClickClose(gym2);
    show(gym2);
    inputNumber.value = "007";
}

let close = document.querySelectorAll(".close");
close.forEach(element => element.addEventListener("click", closeGym));

function closeGym(e) {
    let element =e.target.closest(".row");
    hide(element);
}

//**********************************                function onClickClose(elem, evTarget)               ************************************//

function onClickClose(elem) { 
    click = 0;
    function outsideClickListener(event) {
        if (!elem.contains(event.target) && (click!= 0)) {                      // проверяем, что клик не по элементу и это не первый клик
            elem.hidden = true;                                                 // скрываем элемент
            document.removeEventListener('click', outsideClickListener);        // удаляем обработчик
        } else {
            if (elem.hidden == true) {                                          // если элемент скрыт - удаляем обработчик
                document.removeEventListener('click', outsideClickListener);
            } else {
                click++;
            }
        }
    }
    document.addEventListener('click', outsideClickListener);
}



/**************     table abonement     ***************/

let gym2Btn = document.getElementById("gym2Btn");           /* кнопка "Подтвердить" в личном кабинете */
let table = document.getElementById("table");               /* панель ИНФОРМАЦИЯ О ПОСЕЩЕНИЯХ */
let dataJson;                                               /* JSON */
let inputNumber = document.getElementById("inputNumber");   /* поле -Введите № абонемента: */
inputNumber.defaultValue = "007";

let numWork = document.getElementById("numWork");           /* ячейка - Количество занятий в месяц */
let deadline = document.getElementById("deadline");         /* ячейка - Срок окончания действия */
let firstVisit = document.getElementById("firstVisit");     /* ячейка - Первое посещение */
let numVisit = document.getElementById("numVisit");         /* ячейка - Количество посещенных тренировок */

gym2Btn.addEventListener("click", showTable);

function showTable(e) {
    e.preventDefault();
    numWork.innerHTML = "";
    deadline.innerHTML = "";
    firstVisit.innerHTML = "";
    numVisit.innerHTML = "";
    show(table);
    hide(gym2);
    funcJson();
}



/**************************             JSON               **************************************************/
function funcJson() {
    fetch('https://spreadsheets.google.com/feeds/cells/1RvQNAlNGK0dbPRzchu5pfdSp1Hin6hD47uQoXbt2-Ms/1/public/full?alt=json')
        .then(response => response.json())
        .then(data => {
            dataJson = data;
            getContent(dataJson);
        });
}

function getContent() {
    let arrJson = dataJson.feed.entry;                                                                          /* массив ячеек из Google Spreadsheet */
    let cell = arrJson.find(item => (item.gs$cell.col == 2 && item.gs$cell.$t == +inputNumber.value));          /* ячейка с № абонемента */
    let cellRow = cell.gs$cell.row;                                                                             /* строка с № абонемента */
    numWork.innerHTML = arrJson.find(item => (item.gs$cell.col == 3 && item.gs$cell.row == cellRow)).gs$cell.$t;
    deadline.innerHTML = arrJson.find(item => (item.gs$cell.col == 6 && item.gs$cell.row == cellRow)).gs$cell.$t;
    firstVisit.innerHTML = arrJson.find(item => (item.gs$cell.col == 5 && item.gs$cell.row == cellRow)).gs$cell.$t;
    numVisit.innerHTML = arrJson.find(item => (item.gs$cell.col == 8 && item.gs$cell.row == cellRow)).gs$cell.$t;
}
//                  map                             //


var map;
function initMap() {
    var uluru = { lat:47.124565 , lng:37.684836 };  
    map = new google.maps.Map(document.getElementById('mapid'), {
        center: uluru,
        zoom: 14,
        styles: [
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    });
    var contentString = 'SpartaFamily';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "SpartaFamily",
    });
    infowindow.open(map, marker);
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}
