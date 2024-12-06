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