function generategrid(x = 32) {
    if (x >100) {
        let x = 100;
    }
    
    let height = (x/720);   
    let width = (x/720);

    Array.from(document.querySelectorAll(".block")).forEach(e => e.remove());
    
    for (let i = 0; i < x; i++){
        for (let j = 0; j < x; j++) {
            const div = document.createElement('div');
            div.classList.add("blockdefault", "block"); 
            div.style = "display: flex; height: calc((100% / " + x + ")); width: calc((100% / " + x + "));"
            container.appendChild(div);
        }
    }
}

function resize(){
    let resizeinput = prompt("input size (1-100)", "32");
    resizeinput = resizeinput.split(" ");
    generategrid(resizeinput[0]);
}

function erase(){
    if (cursorStatusAdd == "blockhovered") {
        cursorStatusAdd = "blockdefault";
    }    
    else {
        cursorStatusAdd = "blockhovered";
    }
    if (cursorStatusRemove == "") {
        cursorStatusRemove = "blockhovered";
    }
    else {
        cursorStatusRemove = "";
    }
}


function editable(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.classList.add("editable");
        block.onmouseenter = function (){
            rgbrandomizer();
            updatecolorrule();
            this.classList.add(cursorStatusAdd);
            this.classList.remove(cursorStatusRemove);
        };
    });
}

function uneditable(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        if (!block.classList.contains("blockhovered")) {
            block.classList.remove("editable");
        };
        block.replaceWith(block.cloneNode(false));
    });
}

function rgbrandomizer(){
    rgbr = Math.floor(Math.random() * 257);
    rgbg = Math.floor(Math.random() * 257);
    rgbb = Math.floor(Math.random() * 257);
    rgb = "(" + rgbr + ", " + rgbg + ", " + rgbb + ")";
}

// function changehoverproperty(){
//     colorrule.cssText = ".blockhovered.editable { background-color: " + rgb + ";}"
// }

// function colorruleinitialize(){
//     for (let i = 0; i < stylesheet.cssRules.length; i++){
//         if (stylesheet.cssRules[i].selectorText === ".blockhovered.editable"){
//             colorrule = stylesheet.cssRules[i];
//         };
//     };
// }

function updatecolorrule (){
    stylesheet.deleteRule(1);
    stylesheet.insertRule(`.blockhovered.editable {background-color: ${rgb} yellow}`, 1);
}


let stylesheet = document.styleSheets[0];

let colorrule;

let rgbr = 100;
let rgbg = 100;
let rgbb = 100; 

let rgb = "rgb(" + rgbr + ", " + rgbg + ", " + rgbb + ")";

let container = document.querySelector(".container");

const resizeButton = document.querySelectorAll("#resize");

let cursorStatusAdd = "blockhovered";
let cursorStatusRemove = "";

// colorruleinitialize();

generategrid();