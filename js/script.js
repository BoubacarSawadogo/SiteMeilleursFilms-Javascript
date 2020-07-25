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
    films[i].addEventListener("mouseover", afficherDeatailsFilm);
    films[i].addEventListener("mouseout", finSurvol);
  }

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
  }
  function afficherDeatailsFilm(event) {
    let film = filmData[event.target.id];
    document.getElementById("details").innerHTML = film.text;
  }

  function finSurvol(event) {
    document.getElementById("details").innerHTML = "";
  }

  function selectionnerFilm(event) {
    let film = filmData[event.target.id];
    let filmDisplay = `<div class="film"><img src=${film.image} alt=${film.title} /> <h3>${film.title}</h3></div> `;
    try {
      document.getElementById("selection1").appendChild(filmDisplay);
    } catch (error) {
      console.log(error);
    }
  }

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
