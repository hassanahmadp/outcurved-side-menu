const but = document.querySelector(".but");
const sideNav = document.querySelector(".sideNav");
const list = document.querySelectorAll("li");

but.addEventListener("click", () => {
  sideNav.classList.toggle("expand");
});

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      if (list[i] !== list[j]) {
        list[j].classList.remove("active");

        list[j].children[0].classList.remove("active");
        list[j].children[1].classList.remove("active");
      }
    }

    list[i].classList.toggle("active");
    console.log(list[i].children[0].classList);
    console.log(list[i].children[1]);
    list[i].children[0].classList.toggle("active");
    list[i].children[1].classList.toggle("active");
  });
}
