const btnBurger = document.querySelector('.btn-menu')
const navMenu = document.querySelector('.nav__menu')
const navMenu_links = document.querySelectorAll('.nav__menu a')

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active')
  navMenu.classList.toggle('active')

  btnBurger.classList.contains('active') ?
    document.body.style.overflow = 'hidden' :
    document.body.style.overflow = 'visible'
})

// for (let i = 0; i < navMenu_link.length; i++) {
//   navMenu_link[i].addEventListener('click', function () {
//     btnBurger.classList.remove('active')
//     navMenu.classList.remove('active')
//     document.body.style.overflow = 'visible'
//   })
// }

// document.querySelectorAll('.nav__menu a').forEach(n => n.addEventListener('click'), ()=>{
//   btnBurger.classList.remove('active')
//     navMenu.classList.remove('active')
//     document.body.style.overflow = 'visible'
// })

// for (const navMenu_link of navMenu_links) {
//   navMenu_link.addEventListener('click', ()=>{
//     btnBurger.classList.remove('active')
//     navMenu.classList.remove('active')
//     document.body.style.overflow = 'visible'
//   })
// }

for (const navMenu_link of navMenu_links) {
  navMenu_link.addEventListener('click', ()=>{
    btnBurger.classList.remove('active')
    navMenu.classList.remove('active')
    document.body.style.overflow = 'visible'
  })
}


function update () {
  if (document.body.offsetWidth > 576) {
    btnBurger.classList.remove('active')
    navMenu.classList.remove('active')
    document.body.style.overflow = 'visible'
  }
}

setInterval(() => {
  update()
}, 10)
