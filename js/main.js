
///////////function//////////////
const berger = document.querySelector(".m");
berger.addEventListener("click", () => {
  document.body.classList.toggle("berger");
});

////////////function/////////////
window.addEventListener('resize', () => {
	 if (window.innerWidth > 601) {
    document.body.classList.add('berger');
  }
});


 ///////////function////////////////========>//not working ATM
// window.addEventListener('scroll', () => {
//   document.body.classList.add('berger');
//   console.log("ggggg");
  
//  });
  