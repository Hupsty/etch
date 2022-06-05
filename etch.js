function generategrid(x = 16, y = 16) {
    if (x >100) {
        let x = 100;
    }
    if (y > 100) {
        let y = 100;
    }
    let height = (y/720);
    let width = (x/720);

    Array.from(document.querySelectorAll(".block")).forEach(e => e.remove());
    
    const container = document.querySelector('.container');
    for (let i = 0; i < x; i++){
        for (let j = 0; j < y; j++) {
            const div = document.createElement('div');
            div.classList.add("blockdefault", "block"); 
            div.style = "display: flex; height: calc((100% / " + y + ")); width: calc((100% / " + x + "));"
            div.onmouseover = function(){this.classList.add("blockhovered")};
            container.appendChild(div);
        }
    }
}

function resize(){
    let resizeinput = prompt("input width and height", "16 16");
    resizeinput = resizeinput.split(" ");
    generategrid(resizeinput[0], resizeinput[1]);
}

const resizeButton = document.querySelectorAll("#resize")

generategrid();
