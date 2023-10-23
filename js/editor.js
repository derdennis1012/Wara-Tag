const h1 =          document.querySelector("#h1");
const h2 =          document.querySelector("#h2");
const h3 =          document.querySelector("#h3");
const p =           document.querySelector("#p");
const leftAlign =   document.querySelector("#leftAlign");
const rightAlign =  document.querySelector("#rightAlign");
const centerAlign = document.querySelector("#centerAlign");
const bold =        document.querySelector("#bold");
const italic =      document.querySelector("#italic");
const underline =   document.querySelector("#underline");
const textColor =   document.querySelector("#textColor");
const bulletList =  document.querySelector("#bulletList");
const numberList =  document.querySelector("#numberList");
const indent =      document.querySelector("#indent");
const outdent =     document.querySelector("#outdent");
const image =       document.querySelector("#image");
const link =        document.querySelector("#link");
const table =       document.querySelector("#table");

const textArea =    document.querySelector("#textarea");

textArea.addEventListener('click', () => {
    newLine = document.createElement('span');
    newLine.textContent = "did it";
    textArea.appendChild(newLine);

}, {once: true})