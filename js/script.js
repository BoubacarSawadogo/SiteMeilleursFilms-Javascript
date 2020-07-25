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

    filmConteneur.addEventListener("click", function (event) {
      console.log(filmData[event.target.id]);
      try {
        document
          .getElementById("selection1")
          .appendChild(filmData[event.target.id]);
      } catch (error) {}
      document.getElementById("details").innerHTML =
        filmData[event.target.id].text;
    });

    //Ajout evenement onClick
  } //****FIN***/

  // Affichage de tout les films
  let i = 0;
  for (let i = 0; i < filmData.length; i++) {
    createFilm(i);
  }

  // Filtrage des films par mot cle
  let inputFilter = document.getElementById("filter");
  inputFilter.addEventListener("keyup", rechercher);
  let afficherDetails = document.getElementById("AfficherDetails");
  afficherDetails.addEventListener("input", afficherDeatailsFilm);

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

  function afficherDeatailsFilm() {
    console.log(afficherDetails.checked);
    if (!afficherDetails.checked) {
      document.getElementById("details").style.display = "none";
    } else {
      document.getElementById("details").style.display = "inline-block";
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
