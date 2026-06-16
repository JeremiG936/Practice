const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn0 = document.getElementById("btn-0");
const btnDec = document.getElementById("btn-dec");
const btnSum = document.getElementById("btn-sum");
const btnMin = document.getElementById("btn-min");
const btnMult = document.getElementById("btn-mult");
const btnDiv = document.getElementById("btn-div");
const btnClear = document.getElementById("btn-clear");
const btnDel = document.getElementById("btn-del");
const btnEqual = document.getElementById("btn-equal");
const displayer = document.getElementById("displayer");
let displayItems = "";
let numSet = [];
let opsSet = [];

function renderedDisplayer() {
    displayer.innerText = displayItems
}

btnClear.addEventListener("click", () => {
    displayItems = "";
    numSet = [];
    opsSet = [];
    renderedDisplayer()
})

btnDel.addEventListener("click", () => {
    displayItems = displayItems.slice(0, -1);
    renderedDisplayer()
})

btn1.addEventListener("click", () => {
    displayItems = displayItems.concat("1");
    renderedDisplayer()
})

btn2.addEventListener("click", () => {
    displayItems = displayItems.concat("2");
    renderedDisplayer()
})

btn3.addEventListener("click", () => {
    displayItems = displayItems.concat("3");
    renderedDisplayer()
})

btn4.addEventListener("click", () => {
    displayItems = displayItems.concat("4");
    renderedDisplayer()
})

btn5.addEventListener("click", () => {
    displayItems = displayItems.concat("5");
    renderedDisplayer()
})

btn6.addEventListener("click", () => {
    displayItems = displayItems.concat("6");
    renderedDisplayer()
})

btn7.addEventListener("click", () => {
    displayItems = displayItems.concat("7");
    renderedDisplayer()
})

btn8.addEventListener("click", () => {
    displayItems = displayItems.concat("8");
    renderedDisplayer()
})

btn9.addEventListener("click", () => {
    displayItems = displayItems.concat("9");
    renderedDisplayer()
})

btn0.addEventListener("click", () => {
    displayItems = displayItems.concat("0");
    renderedDisplayer()
})
btnDec.addEventListener("click", () => {
    displayItems = displayItems.concat(".");
    renderedDisplayer()
})

btnSum.addEventListener("click", () => {
    if (displayItems === "") {
        return
    }
    numSet.push(displayItems);
    opsSet.push("+")
    displayItems = "";
    renderedDisplayer();
})

btnMin.addEventListener("click", () => {
    if (displayItems === "") {
        return
    }
    numSet.push(displayItems);
    opsSet.push("-")
    displayItems = "";
    renderedDisplayer();
})

btnMult.addEventListener("click", () => {
    if (displayItems === "") {
        return
    }
    numSet.push(displayItems);
    opsSet.push("x")
    displayItems = "";
    renderedDisplayer();
})

btnDiv.addEventListener("click", () => {
    if (displayItems === "") {
        return
    }
    numSet.push(displayItems);
    opsSet.push("÷")
    displayItems = "";
    renderedDisplayer();
})

function getResult() {
    let count = 0;
        for (let i = 0; i < numSet.length; i++) {
            let step = Number(numSet[i]);
            if (i === 0) {
                count += step
                continue
            }
            else if (opsSet[i - 1] === "+") {
                count += step
            }
            else if (opsSet[i - 1] === "-") {
                count -= step
            }
            else if (opsSet[i - 1] === "x") {
                count *= step
            }
            else if (opsSet[i - 1] === "÷") {
                if (step === 0) {
                    return "Division by zero"
                }
                count /= step
            }
    }
    countStr = String(count)
    return countStr
}

btnEqual.addEventListener("click", () => {
    numSet.push(displayItems);
    displayItems = getResult();
    renderedDisplayer()
})
