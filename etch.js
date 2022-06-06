function generategrid(x = 32, y = 32) {
    if (x >100) {
        let x = 100;
    }
    if (y > 100) {
        let y = 100;
    }
    let height = (y/720);   
    let width = (x/720);

    Array.from(document.querySelectorAll(".block")).forEach(e => e.remove());
    
    for (let i = 0; i < x; i++){
        for (let j = 0; j < y; j++) {
            const div = document.createElement('div');
            div.classList.add("blockdefault", "block"); 
            div.style = "display: flex; height: calc((100% / " + y + ")); width: calc((100% / " + x + "));"
            container.appendChild(div);
        }
    }
}

function resize(){
    let resizeinput = prompt("input width and height", "32 32");
    resizeinput = resizeinput.split(" ");
    generategrid(resizeinput[0], resizeinput[1]);
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
            this.classList.add(cursorStatusAdd);
            this.classList.remove(cursorStatusRemove);
        }
    });
};

function uneditable(){
    const blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        if (!block.classList.contains("blockhovered")) {
            block.classList.remove("editable");
            block.replaceWith(block.cloneNode(false));
        };
    });
};


let container = document.querySelector(".container");

const resizeButton = document.querySelectorAll("#resize");

let cursorStatusAdd = "blockhovered";
let cursorStatusRemove = "";

generategrid();