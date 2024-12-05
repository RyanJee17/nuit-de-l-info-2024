function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function show_image() {
    var img = document.getElementById("picture");
    var division = Math.random() * 5;
    img.width = img.width;
    img.height = img.height;

    var taille = (document.body.clientHeight - img.height) * Math.random()

    console.log(taille)

    // set the position
    img.style.position = 'absolute';
    img.style.marginTop = (document.body.clientHeight/2) * Math.random() + 'px';
    img.style.marginLeft = (document.body.clientWidth/2) * Math.random() + 'px';

    document.body.appendChild(img);
}

function rotateAnimation(degrees) {
    var elem = document.getElementById("picture");
    if (navigator.userAgent.match("Chrome")) {
        elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Firefox")) {
        elem.style.MozTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("MSIE")) {
        elem.style.msTransform = "rotate(" + degrees + "deg)";
    } else if (navigator.userAgent.match("Opera")) {
        elem.style.OTransform = "rotate(" + degrees + "deg)";
    } else {
        elem.style.transform = "rotate(" + degrees + "deg)";
    }
}

show_image();

document.getElementById('picture').addEventListener('click', async () => {
    var degrees = 1;
    while (degrees != 0) {
        setTimeout(rotateAnimation(degrees), 5000);
        degrees++;
        await sleep(5)
        if (degrees == 361){
            degrees = 0;
        }
    }

});


