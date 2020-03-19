///////////function//////////////
const berger = document.querySelector(".m");
berger.addEventListener("click", () => {
  document.body.classList.toggle("berger");
  //////////X function/////////////
  document.querySelector(".x1").classList.toggle("ch1");
  document.querySelector(".x2").classList.toggle("ch2");
  document.querySelector(".x3").classList.toggle("ch3");
});

////////////function/////////////
window.addEventListener("resize", () => {
  if (window.innerWidth > 601) {
    document.body.classList.add("berger");
     //////////X function/////////////
    document.querySelector(".x1").classList.remove("ch1");
    document.querySelector(".x2").classList.remove("ch2");
    document.querySelector(".x3").classList.remove("ch3");
  }
});

///////////function////////////////========>//not working ATM
// window.addEventListener('scroll', () => {
//   document.body.classList.add('berger');
//   console.log("ggggg");

//  });
