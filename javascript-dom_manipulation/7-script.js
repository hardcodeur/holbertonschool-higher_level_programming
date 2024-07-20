fetch("https://swapi-api.hbtn.io/api/films/?format=json")
.then(response => response.json())
.then(response => {
  const films = response.results;
  const ul = document.querySelector("#list_movies");
  films.forEach(film => {
    const li = document.createElement("li");
    const title= document.createTextNode(film.title)
    li.appendChild(title);
    ul.appendChild(li);
  });
}
);
