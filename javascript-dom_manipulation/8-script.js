fetch("https://hellosalut.stefanbohacek.dev/?lang=fr")
.then(response => response.json())
.then(response => {
  document.querySelector("#hello").innerHTML=response.hello;
}
);
