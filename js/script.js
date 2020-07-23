window.onload = function () {
  // Creation d'un film
  function createFilm(number) {
    let someFilm = filmData[number];

    // div qui contient un film
    let filmConteneur = document.createElement("div");
    filmConteneur.className = "film";
    filmConteneur.id = number + "-film";

    // creation image du film(someFilm)
    let image = document.createElement("img");
    image.src = someFilm.image;
    image.alt = someFilm.title;

    let titre = document.createElement("h3");
    titre.innerHTML = someFilm.title;

    filmConteneur.appendChild(image);
    filmConteneur.appendChild(titre);

    //Ajout du film cree dans le grand conteneur de tous les films
    let conteneurGeneralFilm = document.getElementById("films");
    conteneurGeneralFilm.appendChild(filmConteneur);
  }

  createFilm(0);
  createFilm(1);
};
