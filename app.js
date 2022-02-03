let chan = 1;
const selectEle = document.querySelector('.btn-manual')

setInterval(function () {
  document.getElementById('radio' + chan).checked = true;
  chan++;
  if (chan > 4) {
    chan = 1;
  }
}, 4000);

const artInside1 = document.querySelector('.art-text-inside')
const selectArt = document.querySelector('.article-2')


const showDiv = () => {
  artInside1.style.display = "block";
}

const functionAS = () => {
  selectArt.style.transform = '2s';
}

const hiddenDiv = () => {
  artInside1.style.display = "none";
}

selectArt.addEventListener('mouseenter', showDiv)
selectArt.addEventListener('mouseleave', hiddenDiv)

// menu hamburger

const selectUlMenu = document.querySelector('.ul-menu')
const selectOpenMenu = document.querySelector('.openMenu')
const selectclosMenu = document.querySelector('.closMenu')
const selectLink = selectUlMenu.querySelectorAll('.linkNav')

const showFunction = () => {
  selectUlMenu.style.display = 'flex';
  selectUlMenu.style.top = '0'
}

const closeFunction = () => {
  selectUlMenu.style.top = '-100%';
}

selectLink.forEach(e => e.addEventListener('click', ()=>{
     selectUlMenu.style.top = '-100%';
}))


selectOpenMenu.addEventListener('click', showFunction);
selectclosMenu.addEventListener('click', closeFunction);
