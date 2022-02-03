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

const functionAS= ()=>{
  selectArt.style.transform ='2s';
}

const hiddenDiv = () => {
  artInside1.style.display = "none"; 
}


selectArt.addEventListener('mouseenter', showDiv)
selectArt.addEventListener('mouseleave', hiddenDiv)