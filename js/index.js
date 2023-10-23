const waraBttn = document.querySelector(".create");
const computedStyle = window.getComputedStyle(waraBttn);


document.addEventListener("DOMContentLoaded", function(){
    const root = document.documentElement;
    var height = computedStyle.getPropertyValue("height");
    root.style.setProperty('--button-hight', "-" + height);
})
