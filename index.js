window.onload = () => {
  let rating = null;
  const options = document.getElementsByClassName("options");
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", (e) => {
      if (options[i].id == 1) {
        rating = options[i].id;
        options[i].classList.add("selected-rating");
      }
      if (options[i].id == 2) {
        rating = options[i].id;
        options[i].classList.add("selected-rating");
      }
      if (options[i].id == 3) {
        rating = options[i].id;
        options[i].classList.add("selected-rating");
      }
      if (options[i].id == 4) {
        rating = options[i].id;
        options[i].classList.add("selected-rating");
      }
      if (options[i].id == 5) {
        rating = options[i].id;
        options[i].classList.add("selected-rating");
      }
      for (let j = 0; j < options.length; j++) {
        if (options[j].id != options[i].id) {
          options[j].classList.remove("selected-rating");
        }
      }
    });
  }
  const btns = document.getElementsByClassName("btn");
  btns[0].addEventListener("click", () => {
    if (rating != null) {
      document.getElementById("uf").style.display = "none";
      document.getElementById("res").style.display = "block";
      document.getElementById("my-rating").innerText = rating;
    }
  });
};
