let enterBtn = document.getElementById("enter");
let header = document.querySelector("header");
let numEntDiv = 0;
let cancel;


enterBtn.addEventListener("click", function() {
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

    if (numEntDiv == 0) {
        header.append(enterDiv);
        numEntDiv++;
        cancel = document.getElementById("cancel");
    } else {
        removeEnterDiv();
    }
})

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

/***************************************************************************************/

let signUp = document.getElementById("signUp");
let signBoxing = document.getElementById("signBoxing");
let signMMA = document.getElementById("signMMA");
let signCrossfit = document.getElementById("signCrossfit");
let cancelSign = document.getElementById("cancelSign");

function show(element) {            /***************            function show()             ****************/
    element.hidden = false;
}

function hide(element) {            /***************            function hide()             ****************/
    element.hidden = true;
}

function showForm(e) {
    e.preventDefault();
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
    console.log(background.classList);
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
    console.log(background.classList);
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

let gymBuy = document.getElementById("gymBuy");
let gym1 = document.getElementById("gym1");
let gymCheck = document.getElementById("gymCheck");
let gym2 = document.getElementById("gym2");

gymBuy.addEventListener("click", showGym1);
gymCheck.addEventListener("click", showGym2);


function showGym1(e) {
    e.preventDefault();
    show(gym1);
}
function showGym2(e) {
    e.preventDefault();
    show(gym2);
}

let close = document.querySelectorAll(".close");
close.forEach(element => element.addEventListener("click", closeGym));

function closeGym(e) {
    let element =e.target.closest(".row");
    hide(element);
}

/**************     table abonement     ***************/

let gym2Btn = document.getElementById("gym2Btn");
let table = document.getElementById("table");

gym2Btn.addEventListener("click", showTable);

function showTable(e) {
    e.preventDefault();
    show(table);
    hide(gym2);
}
