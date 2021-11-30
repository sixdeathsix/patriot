let showBtn = document.querySelector('.show-btn')

window.onscroll = () => {
  if(window.scrollY > 800) {
    showBtn.classList.add('_show')
  }
  else {
    showBtn.classList.remove('_show')
  }
}

showBtn.onclick = () => {
  window.scrollTo(0,0)
}