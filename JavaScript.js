let enterBtn = document.getElementById("enter");
let header = document.querySelector("header");
let numEntDiv = 0;


enterBtn.addEventListener("click", function() {
    let enterDiv = document.createElement("div");
    enterDiv.className = "enterDiv";
    let text = `
    <div class="row">
        <div class="col">
            <p>Login</p>
            <p>Password</p>
        </div>
    </div>
    `
    enterDiv.innerHTML = text;
    if (numEntDiv == 0) {
        header.append(enterDiv);
        numEntDiv++;
    } else {
        enterDiv = header.querySelector(".enterDiv");
        enterDiv.remove();
        numEntDiv--;
    }

})