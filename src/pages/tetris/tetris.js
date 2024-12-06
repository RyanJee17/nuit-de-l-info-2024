document.addEventListener('DOMContentLoaded', () => {
  const grille = document.querySelector('.grille');
  let carre = Array.from(document.querySelectorAll('.grille div'));
  const AffichageScore = document.querySelector('#score');
  const StartBtn = document.querySelector('#boutton-start');
  const taille = 10;
  let nextRandom = 0;
  let timerID;
  let score = 0;
  const couleur = ['#465E99', '#58DCBB', '#C5E1E3', '#9EE454', '#EBCD60'];

  // Briques
  const Lbrique = [
    [1, taille + 1, taille * 2 + 1, 2],
    [taille, taille + 1, taille + 2, taille * 2 + 2],
    [1, taille + 1, taille * 2 + 1, taille * 2],
    [taille, taille * 2, taille * 2 + 1, taille * 2 + 2]
  ];
  const Zbrique = [
    [0, taille, taille + 1, taille * 2 + 1],
    [taille + 1, taille + 2, taille * 2, taille * 2 + 1],
    [0, taille, taille + 1, taille * 2 + 1],
    [taille + 1, taille + 2, taille * 2, taille * 2 + 1]
  ];
  const Tbrique = [
    [1, taille, taille + 1, taille + 2],
    [1, taille + 1, taille + 2, taille * 2 + 1],
    [taille, taille + 1, taille + 2, taille * 2 + 1],
    [1, taille, taille + 1, taille * 2 + 1]
  ];
  const Obrique = [
    [0, 1, taille, taille + 1],
    [0, 1, taille, taille + 1],
    [0, 1, taille, taille + 1],
    [0, 1, taille, taille + 1]
  ];
  const Ibrique = [
    [1, taille + 1, taille * 2 + 1, taille * 3 + 1],
    [taille, taille + 1, taille + 2, taille + 3],
    [1, taille + 1, taille * 2 + 1, taille * 3 + 1],
    [taille, taille + 1, taille + 2, taille + 3]
  ];

  const Brique = [Lbrique, Zbrique, Tbrique, Obrique, Ibrique];

  let positionActu = 4;
  let rottationActu = 0;

  // Sélection aléatoire de la brique et de sa position
  let random = Math.floor(Math.random() * Brique.length);
  let actuel = Brique[random][rottationActu];

  // Dessine la brique
  function dessin() {
    actuel.forEach(index => {
      if (carre[positionActu + index]) {
        carre[positionActu + index].classList.add('Brique');
        carre[positionActu + index].style.backgroundColor = couleur[random];
      }
    });
  }

  // Efface la brique
  function efface() {
    actuel.forEach(index => {
      if (carre[positionActu + index]) {
        carre[positionActu + index].classList.remove('Brique');
        carre[positionActu + index].style.backgroundColor = '';
      }
    });
  }

  // Fonctions des touches de direction
  function control(e) {
    e.preventDefault(); // Empêche le comportement par défaut des touches
    if (e.keyCode === 37) {
      mouvementGauche();
    } else if (e.keyCode === 38) {
      Rotation();
    } else if (e.keyCode === 39) {
      mouvementDroit();
    } else if (e.keyCode === 40) {
      Descente();
    }
  }
  document.addEventListener('keydown', control);

  // Fonction qui fait descendre la brique
  function Descente() {
    efface();
    positionActu += taille;
    dessin();
    Stop();
  }

  // Fonction qui arrête la brique
  function Stop() {
    if (actuel.some(index => carre[positionActu + index + taille]?.classList.contains('taken'))) {
      actuel.forEach(index => carre[positionActu + index]?.classList.add('taken'));
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * Brique.length);
      rottationActu = 0;
      actuel = Brique[random][rottationActu];
      positionActu = 4;
      dessin();
      affichageForme();
      ajoutScore();
      gameOver();
    }
  }

  // Mouvement gauche
  function mouvementGauche() {
    efface();
    const CoteGauche = actuel.some(index => (positionActu + index) % taille === 0);

    if (!CoteGauche) positionActu -= 1;

    if (actuel.some(index => carre[positionActu + index]?.classList.contains('taken'))) {
      positionActu += 1;
    }

    dessin();
  }

  // Mouvement droit
  function mouvementDroit() {
    efface();
    const CoteDroit = actuel.some(index => (positionActu + index) % taille === taille - 1);

    if (!CoteDroit) positionActu += 1;

    if (actuel.some(index => carre[positionActu + index]?.classList.contains('taken'))) {
      positionActu -= 1;
    }

    dessin();
  }

  // Rotation des briques
  function Rotation() {
    efface();
    rottationActu++;
    if (rottationActu === Brique[random].length) {
      rottationActu = 0;
    }
    actuel = Brique[random][rottationActu];
    dessin();
  }

  // Affichage de la prochaine brique
  const affichageBrique = document.querySelectorAll('.mini-grille div');
  const affichageTaille = 4;
  let affichageIndex = 1;

  const prochaineBrique = [
    [1, affichageTaille + 1, affichageTaille * 2 + 1, 2],
    [0, affichageTaille, affichageTaille + 1, affichageTaille * 2 + 1],
    [1, affichageTaille, affichageTaille + 1, affichageTaille + 2],
    [0, 1, affichageTaille, affichageTaille + 1],
    [1, affichageTaille + 1, affichageTaille * 2 + 1, affichageTaille * 3 + 1]
  ];

  function affichageForme() {
    affichageBrique.forEach(square => {
      square.classList.remove('Brique');
      square.style.backgroundColor = '';
    });
    prochaineBrique[nextRandom].forEach(index => {
      if (affichageBrique[affichageIndex + index]) {
        affichageBrique[affichageIndex + index].classList.add('Brique');
        affichageBrique[affichageIndex + index].style.backgroundColor = couleur[nextRandom];
      }
    });
  }

  // Bouton start
  StartBtn.addEventListener('click', () => {
    if (timerID) {
      clearInterval(timerID);
      timerID = null;
    } else {
      dessin();
      timerID = setInterval(Descente, 750);
      nextRandom = Math.floor(Math.random() * Brique.length);
      affichageForme();
    }
  });

  function ajoutScore() {
    for (let i = 0; i < 199; i += taille) {
      const ligne = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];

      if (ligne.every(index => carre[index]?.classList.contains('taken'))) {
        score += 10;
        window.location.href="../result/result.html"
        AffichageScore.innerHTML = score;
        ligne.forEach(index => {
          if (carre[index]) {
            carre[index].classList.remove('taken');
            carre[index].classList.remove('Brique');
            carre[index].style.backgroundColor = '';
          }
        });
        const enleveForme = carre.splice(i, taille);
        carre = enleveForme.concat(carre);
        carre.forEach(cell => grille.appendChild(cell));
      }
    }
  }

  function gameOver() {
    if (actuel.some(index => carre[positionActu + index]?.classList.contains('taken'))) {
      AffichageScore.innerHTML = 'Fin du Jeu';
      clearInterval(timerID);
    }
  }
});
