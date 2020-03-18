const berger = document.querySelector(".m");
console.log(berger);

berger.addEventListener("click", () => {
  document.body.classList.toggle("berger");
});

const comprobarAncho = () => {
  if (window.innerWidth > 601) {
    document.body.classList.add('berger');
  }
};
window.addEventListener('resize', () => {
	comprobarAncho();
});