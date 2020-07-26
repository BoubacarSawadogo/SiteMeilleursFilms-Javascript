window.onload = function () {
  // Creation d'un film
  function createFilm(number) {
    let someFilm = filmData[number];
    someFilm.id = number;

    // div qui contient un film
    let filmConteneur = document.createElement("div");
    filmConteneur.className = "film";
    filmConteneur.id = number;

    // creation image du film(someFilm)
    let image = document.createElement("img");
    image.src = someFilm.image;
    image.alt = someFilm.title;
    image.id = someFilm.id;

    let titre = document.createElement("h3");
    titre.innerHTML = someFilm.title;

    filmConteneur.appendChild(image);
    filmConteneur.appendChild(titre);

    //Ajout du film cree dans le grand conteneur de tous les films
    let conteneurGeneralFilm = document.getElementById("films");
    conteneurGeneralFilm.appendChild(filmConteneur);
  } //****FIN***/

  // Affichage de tous les films
  let i = 0;
  for (let i = 0; i < filmData.length; i++) {
    createFilm(i);
  }

  // Filtrage des films par mot cle
  let inputFilter = document.getElementById("filter");
  inputFilter.addEventListener("keyup", rechercher);
  // desactiver affichage details du films selectionne
  let afficherDetails = document.getElementById("AfficherDetails");
  afficherDetails.addEventListener("input", desactiverDetailsFilm);
  // Ajout evenement click a chaque film
  let films = document.getElementsByClassName("film");
  for (let i = 0; i < films.length; i++) {
    films[i].addEventListener("click", selectionnerFilm);
    films[i].addEventListener("mouseover", afficherDetailsFilm);
    films[i].addEventListener("mouseout", finSurvol);
  }
  //vider les films selectionnes
  let vider = document.getElementById("vider");
  vider.addEventListener("click", viderSelectionFilm);

  // suppresion film selectionne
  /* let select1 = document.getElementById("selection1");
  select1.addEventListener("click", removeSelection1);
  let select = document.getElementById("selection2");
  select1.addEventListener("click", removeSelection2);*/
  let selection = document.getElementById("selection");
  selection.addEventListener("click", removeSelection);

  function rechercher(event) {
    let inputValue = event.target.value;
    inputValue = inputValue.toLowerCase();

    for (let i = 0; i < filmData.length; i++) {
      let title = filmData[i].title;
      let film = document.getElementById(i);
      title = title.toLowerCase();
      if (title.includes(inputValue)) {
        film.style.display = "inline-block";
      } else {
        film.style.display = "none";
      }
    }
  }

  function desactiverDetailsFilm() {
    if (!afficherDetails.checked) {
      document.getElementById("details").style.display = "none";
    } else {
      document.getElementById("details").style.display = "inline-block";
    }
  } //fin
  function afficherDetailsFilm(event) {
    let film = filmData[event.target.id];
    try {
      document.getElementById("details").innerHTML = film.text;
    } catch (error) {}
  }

  function finSurvol(event) {
    document.getElementById("details").innerHTML = "";
  } //fin

  function selectionnerFilm(event) {
    let film = event.target.parentNode;
    let selection1 = document.getElementById("selection1");
    let selection2 = document.getElementById("selection2");
    let selection1Child = selection1.childNodes;
    let selection2Child = selection2.childNodes;
    if (selection1Child.length == 1) {
      selection1.insertBefore(film, selection1Child[0]);
    } else if (selection2Child.length == 1) {
      selection2.insertBefore(film, selection2Child[0]);
    }
    film.addEventListener("mouseover", afficherDetailsFilm);
    film.addEventListener("mouseout", finSurvol);
  } // fin

  function viderSelectionFilm() {
    let film = event.target.parentNode;
    let selection1 = document.getElementById("selection1");
    let selection2 = document.getElementById("selection2");
    let selection1Child = selection1.childNodes;
    let selection2Child = selection2.childNodes;
    if (selection1Child.length == 2 && selection2Child.length == 1) {
      let film1 = selection1Child[0];
      selection1.removeChild(film1);
      document.getElementById("films").appendChild(film1);
    } else if (selection2Child.length == 2 && selection1Child.length == 1) {
      let film2 = selection2Child[0];
      selection2.removeChild(film2);
      document.getElementById("films").appendChild(film2);
    } else if (selection1Child.length == 2 && selection2Child.length == 2) {
      let film1 = selection1Child[0];
      let film2 = selection2Child[0];
      selection1.removeChild(film1);
      selection2.removeChild(film2);
      document.getElementById("films").appendChild(film1);
      document.getElementById("films").appendChild(film2);
    }
  } // fin

  function removeSelection(event) {
    let filmClicked = event.target.parentNode;
    let select = filmClicked.parentNode;
    let selectChilds = select.childNodes;
    if (selectChilds[0].className == "film") {
      let copyFilm = selectChilds[0];
      select.removeChild(copyFilm);
      document.getElementById("films").appendChild(copyFilm);
    }
  } //fin

  // Autre moyen d'afficher dynamiqueMENT tous les films
  /* function addFilms() {
    let films = filmData.slice();
    let filmmm = "";
    let filmsAll = films.forEach((film) => {
      filmmm += `
      <div class="film">
            <img
              src=${film.image}
              alt=${film.title}
            />
            <h3>${film.title}</h3>
          </div>
      `;
    });
    let conteneurGeneralFilm = document.getElementById("films");
    conteneurGeneralFilm.innerHTML = filmmm;
  }
  addFilms();
  */
};
