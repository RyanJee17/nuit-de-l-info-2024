var span = document.getElementsByClassName("close")[0];
var modal;

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('ButtonPeau').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "La surface de l'océan – La peau"
    

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/peau-02.svg"
    image.alt = "La peau de Oceane"
    

    texte = document.getElementById("texteModal");
    texte.textContent = "La surface de l'océan peut être comparée à la peau humaine, car elle joue un rôle de protection et de régulation. Tout comme la peau nous protège des éléments extérieurs (comme la chaleur, le froid ou les infections), la surface de l'océan régule l'échange de chaleur avec l'atmosphère, influençant le climat mondial. La peau est aussi en contact avec l'environnement extérieur et perçoit des stimuli ; de la même manière, la surface de l'océan interagit constamment avec l'atmosphère, notamment à travers les vagues et les échanges de gaz (comme l'oxygène et le CO2)."

    modal = document.getElementById("modal");
    modal.style.display = "block";
});

document.getElementById('ButtonPoumons').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les vagues et les marées – Les poumons"

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/Poumons-07.svg"
    image.alt = "Les poumons de Oceane"

    texte = document.getElementById("texteModal");
    texte.textContent = "Les vagues et les marées peuvent être comparées aux poumons humains, qui assurent l’échange de gaz dans le corps. Tout comme les poumons inhalent de l'oxygène et rejettent du dioxyde de carbone, les océans génèrent des vagues qui facilitent les échanges de gaz, notamment l’oxygène et le CO2, avec l’atmosphère. Ces mouvements constants de l’eau contribuent à la régulation des gaz dans l'atmosphère et à l'oxygénation de l'environnement marin."

    modal = document.getElementById("modal");
    modal.style.display = "block";
});

document.getElementById('ButtonReins').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les grandes profondeurs océaniques (abysses) – Les reins et le système d’élimination"

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/Reins-03.svg"
    image.alt = "Les reins de Oceane"

    texte = document.getElementById("texteModal");
    texte.textContent= "Les grandes profondeurs des océans, comme la fosse des Mariannes ou les plaines abyssales, peuvent être comparées aux reins et aux systèmes d’élimination de notre corps. Tout comme les reins filtrent les toxines et régulent l'équilibre des fluides et des sels, les profondeurs océaniques jouent un rôle clé dans la régulation du carbone et des autres éléments chimiques, en agissant comme un 'puits' qui capte et stocke le carbone, contribuant à l'équilibre global du climat."

    modal = document.getElementById("modal");
    modal.style.display = "block";
})

document.getElementById('ButtonMains').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les zones littorales (plages et estuaires) – Les mains et les pieds"

    image = document.getElementById("imageModal");
    image.src = ""
    image.alt = ""

    texte = document.getElementById("texteModal");
    texte.textContent = "Les zones littorales, comme les plages, les estuaires et les mangroves, peuvent être comparées aux mains et aux pieds humains. Ces zones sont des interfaces, des points de contact entre deux mondes différents : la terre et l'eau. Elles abritent une biodiversité extraordinaire et jouent un rôle crucial dans l'absorption des nutriments, la filtration de l'eau et la protection des côtes contre l'érosion. Tout comme les mains et les pieds nous permettent d'interagir avec notre environnement et de protéger notre corps, les zones littorales servent de 'frontières' écologiques, offrant des services vitaux à la fois pour les humains et pour la faune marine."

    modal = document.getElementById("modal");
    modal.style.display = "block";
})

document.getElementById('ButtonCellules').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Le plancton (phytoplancton et zooplancton) – Les cellules et les mitochondries"

    image = document.getElementById("imageModal");
    image.src = ""
    image.alt = ""

    texte = document.getElementById("texteModal");
    texte.textContent = "Le plancton est à la base de la chaîne alimentaire marine, tout comme les cellules sont à la base du fonctionnement de notre corps. Le phytoplancton, qui produit de l'oxygène et de la biomasse à partir de la lumière et des nutriments, fonctionne un peu comme nos mitochondries, qui produisent l'énergie nécessaire à la cellule. De la même manière que les mitochondries sont essentielles à la production d'énergie pour le corps, le phytoplancton est essentiel pour maintenir la chaîne alimentaire et la vie marine en fournissant de l’énergie et des nutriments."

    modal = document.getElementById("modal");
    modal.style.display = "block";
})

document.getElementById('ButtonCirculatoire').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les courants marins – Le système circulatoire"

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/Coeur-04.svg"
    image.alt = "Le coeur de Oceane"

    texte = document.getElementById("texteModal");
    texte.textContent = "Les courants marins dans l'océan peuvent être comparés au système circulatoire humain, qui transporte le sang et les nutriments à travers le corps. De la même manière que les vaisseaux sanguins acheminent le sang aux différentes parties du corps pour les nourrir et réguler leur température, les courants marins transportent la chaleur, les nutriments et les gaz dissous, comme l'oxygène et le CO2, entre les différentes couches de l'océan et vers l'atmosphère. Cette circulation permet de maintenir un équilibre thermique et chimique dans l'ensemble de la planète."

    modal = document.getElementById("modal");
    modal.style.display = "block";
})

document.getElementById('ButtonOs').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les coraux et les récifs coralliens – Les os et les structures de soutien"

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/os-05.svg"
    image.alt = "Les os de Oceane"

    texte = document.getElementById("texteModal");
    texte.textContent = "Les récifs coralliens sont souvent comparés à des structures de soutien, comme nos os. Tout comme les os donnent forme et structure à notre corps, les récifs coralliens fournissent un habitat et un support pour une biodiversité marine extrêmement riche. Les coraux, qui construisent ces récifs à partir de calcium, jouent également un rôle de protection en atténuant l'impact des vagues et en réduisant l'érosion côtière, un peu comme nos os protègent nos organes internes."

    modal = document.getElementById("modal");
    modal.style.display = "block";
})

document.getElementById('ButtonFoie').addEventListener('click', (e) => {
    titre = document.getElementById("titreModal");
    titre.textContent = "Les océans profonds et leur rôle dans le stockage du CO2 – Le foie"

    image = document.getElementById("imageModal");
    image.src = "src/assets/img/foie-06.svg"
    image.alt = "Le foie de Oceane"

    texte = document.getElementById("texteModal");
    texte.textContent = "Le rôle des océans profonds dans la séquestration du carbone est similaire à celui du foie dans notre corps. Le foie filtre et détoxifie le sang en stockant et en métabolisant des substances. De la même manière, les océans absorbent et stockent une quantité importante de CO2, jouant un rôle clé dans la régulation du climat. Comme le foie aide à maintenir l’équilibre chimique dans le corps, les océans aident à stabiliser l'atmosphère en capturant le CO2 excédentaire."

    modal = document.getElementById("modal");
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