window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("window-scrolled", window.scrollY > 0)
})


const textButtons = document.querySelectorAll(".contact_btn");

textButtons.forEach(textButtons => {
    let text = textButtons.querySelector("p");
})

text.innerHTML = textButtons.innerHTML.split("").map((character, index)=> `
<span style="transform:rotate(${index * 12}deg)">${character}</span>`).join("") 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });