function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let img = document.createElement('img');

function show_image() {
    img.src = "src/assets/img/chat.jpg";
    img.alt = "";
    img.width = img.width;
    img.height = img.height;

    var taille = (document.body.clientHeight - img.height) * Math.random();

    // set the position
    img.style.position = 'absolute';
    img.style.zIndex = 1;
    img.style.transform = 'translate(0,-100%)'
    img.style.marginTop = (document.body.clientHeight / 2) * Math.random() + 'px';
    img.style.marginLeft = (document.body.clientWidth / 2) * Math.random() + 'px';

    document.body.appendChild(img);
}

function rotateAnimation(degrees) {
    if (navigator.userAgent.match("Chrome")) {
        img.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        img.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        img.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        img.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        img.style.transform = "rotate(" + degrees + "deg)";
    }
}

show_image();

/*
img.addEventListener('click', async () => {
    var degrees = 1;
    while (degrees != 0) {
        setTimeout(rotateAnimation(degrees), 5000);
        degrees++;
        await sleep(5)
        if (degrees == 361) {
            degrees = 0;
        }
    }

})*/


