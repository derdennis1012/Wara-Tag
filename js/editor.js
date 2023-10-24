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



var markedElement = null;
var allSelected = false;

textArea.addEventListener('mouseup', (e) => {
    if(window.getSelection().toString() != ""){
       markedElement = window.getSelection().anchorNode.parentElement;
    }
    else{
        markedElement = null;
    }
})

textArea.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
        e.preventDefault();
        createElement('p');
    }
})


textArea.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.keyCode == 65 && e.ctrlKey){
        console.log("ctrl + a");
        e.preventDefault();
        var range = document.createRange();
        range.selectNodeContents(textArea);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        allSelected = true;
        markedElement = textArea;
    }
})


textArea.addEventListener('keyup', (e) => {
    //backspace
    if(e.keyCode == 8){
        if(markedElement != null){
            if(allSelected){
                return;
                console.log("kkk");

                textArea.innerHTML = "<p>j</p>";
                createElement('p');
                allSelected = false;
                return;
            }
            if(markedElement.innerHTML == ""){
                markedElement.parentNode.removeChild(markedElement);
                markedElement = null;
            }
        }else{
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);
            var element = range.startContainer.parentElement;
            if(element.innerHTML == ""){
                element.parentNode.removeChild(element);
            }
        }
    }
})

function convertElemet(element, goalTag){
    var newElement = document.createElement(goalTag);
    newElement.innerHTML = element.innerHTML;
    element.parentNode.replaceChild(newElement, element);
    markedElement = newElement;
}

function createElement(type){
    if(markedElement != null){
        convertElemet(markedElement, type);
    }else{
        newLine = document.createElement(type);
        newLine.textContent = "enter text";
        newLine.contentEditable = true;
        var selection = window.getSelection(); 
        if(selection.anchorNode == null){
            textArea.appendChild(newLine);
            setCursor(newLine);
            return;
        }
        if(selection.anchorNode.nodeType == 3){
            var element = selection.anchorNode.parentElement;
            element.parentNode.insertBefore(newLine, element.nextSibling);
            setCursor(newLine);
            return;
        }
       
        var range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(newLine);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        setCursor(newLine);

    }
    
}

function setCursor(element){
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
}

h1.addEventListener('click', (e) => {
    e.preventDefault();
   createElement('h1');
})
h2.addEventListener('click', (e) => {
    e.preventDefault();
    createElement('h2');
})
h3.addEventListener('click', (e) => {
    e.preventDefault();
    createElement('h3');
})

