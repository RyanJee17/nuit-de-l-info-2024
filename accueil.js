var span = document.getElementsByClassName("close")[0];
var modal;

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        console.log(event.target);
        modal.style.display = "none";
    }
}

function model() {
    modal = document.getElementById("peau");
    modal.style.display = "block";
}

document.getElementById('ButtonPeau').addEventListener('click', (e) => {
    modal = document.getElementById("peau");
    modal.style.display = "block";
});

document.getElementById('ButtonPoumons').addEventListener('click', (e) => {
    modal = document.getElementById("poumons");
    modal.style.display = "block";
});

document.getElementById('ButtonReins').addEventListener('click', (e) => {
    modal = document.getElementById("reins");
    modal.style.display = "block";
})

document.getElementById('ButtonMains').addEventListener('click', (e) => {
    modal = document.getElementById("mains");
    modal.style.display = "block";
})

document.getElementById('ButtonCellules').addEventListener('click', (e) => {
    modal = document.getElementById("cellules");
    modal.style.display = "block";
})

document.getElementById('ButtonCirculatoire').addEventListener('click', (e) => {
    modal = document.getElementById("circulation");
    modal.style.display = "block";
})

document.getElementById('ButtonOs').addEventListener('click', (e) => {
    modal = document.getElementById("os");
    modal.style.display = "block";
})

document.getElementById('ButtonFoie').addEventListener('click', (e) => {
    modal = document.getElementById("foie");
    modal.style.display = "block";
})

/*
document.getElementById('picture').addEventListener('click', (e) => {
    /*var cursorX = e.clientX;
    var cursorY = e.pageY;
    console.log(cursorX, cursorY);
    img = document.getElementById('picture').getBoundingClientRect();
    console.log(cursorX - img.left)

    var ratioX = e.target.naturalWidth / e.target.offsetWidth;
    var ratioY = e.target.naturalHeight / e.target.offsetHeight;
    var imgX = Math.round(e.offsetX * ratioX);
    var imgY = Math.round(e.offsetY * ratioY);

    console.log(imgX, imgY);
    /*if (quelque chose){
    }
    else if (){
    }
    else{
    model();
    }
    
})*/