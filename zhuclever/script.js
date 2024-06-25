let header;
let links;

const resizeObserver = new ResizeObserver(()=>{
    centerHeader();
})

window.addEventListener("load", ()=>{
    header = document.getElementById("zhuHeader");
    centerHeader();
    resizeObserver.observe(document.querySelector("#zhuHeader"));

    links = document.getElementsByClassName("navLink");

    for(let i = 0; i < links.length; i++){
        let link = links[i];
        randomizeMaskPos(link);
        link.addEventListener("mouseover", e=>{
            randomizeMaskPos(e.target);
        });
    }
})

function centerHeader(){
    let headerHeight = header.offsetHeight;

    if(headerHeight < window.innerHeight && window.innerWidth >= 1100){
        let marginTop;
        marginTop = (window.innerHeight - headerHeight) / 2;
        header.style.marginTop = `${marginTop * 0.825}px`;
    }
    else{
        if(window.innerWidth >= 1100){
            header.style.marginTop = '7%';
        }
        else{
            if(headerHeight < window.innerHeight * 0.85){
                let marginTop;
                marginTop = (window.innerHeight - headerHeight) / 2;
                header.style.marginTop = `${marginTop * 0.8}px`;
            }
            else{
                header.style.marginTop = '10%';
            }
        }
    }
}

function randomizeMaskPos(link){
        let randomX = randomIntFromInterval(25, 35);
        let randomY = randomIntFromInterval(2, 7);
        link.style.setProperty("--randomPosX", `${randomX}px`);
        link.style.setProperty("--randomPosY", `${randomY}px`);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
