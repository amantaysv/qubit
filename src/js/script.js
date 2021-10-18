$('.brands__carousel').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 2500,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
      },
    },
  ],
})

$('.trusted-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
})
const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const overlay = document.querySelector('.overlay')
burger.addEventListener('click', () => {
  navbar.classList.toggle('active')
  burger.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('hide')
})
