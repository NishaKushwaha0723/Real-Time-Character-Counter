const charval = document.getElementById("textarea");
let totalcount = document.getElementById("total-counter");
let remainingcount = document.getElementById("remaining-count");

let userChar = 0;

//to update the character on screen
const updateCounter = () => {
    userChar = charval.value.length;

    totalcount.innerText = userChar;

    remainingcount.innerText = 150 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

//to copy text

const copyText = () => {
    charval.select();
    charval.setSelectionRange(0, 150)
    navigator.clipboard.writeText(charval.value)
}