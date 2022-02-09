// select div and elemnt 
//  select div slider
const selectEle = document.querySelector('.btn-manual')
//select div for article
const artInside1 = document.querySelector('.art-text-inside')
const selectArt = document.querySelector('.article-2')
// menu hamburger
const selectUlMenu = document.querySelector('.ul-menu')
const selectOpenMenu = document.querySelector('.openMenu')
const selectclosMenu = document.querySelector('.closMenu')
const selectLink = selectUlMenu.querySelectorAll('.linkNav')
//select div create new div for skill
const selectDivSkill = document.querySelector('.container-skill')

//variable
// variable for slider
let chan = 1;

//Function
//Slider funtion
setInterval(function () {
  document.getElementById('radio' + chan).checked = true;
  chan++;
  if (chan > 4) {
    chan = 1;
  }
}, 4000);

// function change div article

const showDiv = () => {
  artInside1.style.display = "block";
}
const functionAS = () => {
  selectArt.style.transform = '2s';
}
const hiddenDiv = () => {
  artInside1.style.display = "none";
}

//function displaying the menu

const showFunction = () => {
  selectUlMenu.style.display = 'flex';
  selectUlMenu.style.top = '0'
}
const closeFunction = () => {
  selectUlMenu.style.top = '-100%';
}
selectLink.forEach(e => e.addEventListener('click', () => {
  selectUlMenu.style.top = '-100%';
}))

// create object

let skillObject = [{
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'html',
    valueText: '75%',
    //  value: 0.75,
    //    startAngle: -1.55,
    //    fill: {
    //      color: red
    //    }

  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'css',
    valueText: '75%',
    //  value: 0.75,
    //    startAngle: -1.55,
    //    fill: {
    //      color: red
    //    }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'JavaScript',
    valueText: '60%',
    //  value: 0.6,
    //    startAngle: -1.55,
    //    fill: {
    //      color: red
    //    }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'Java',
    valueText: '40%', 
    // value: 0.4,
    //   startAngle: -1.55,
    //   fill: {
    //     color: red
    //   }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'Git',
    valueText: '20%', 
    // value: 0.2,
    //   startAngle: -1.55,
    //   fill: {
    //     color: red
    //   }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'Visual Studio Code',
    valueText: '60%',
    //  value: 0.6,
    //    startAngle: -1.55,
    //    fill: {
    //      color: red
    //    }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'Android Studio',
    valueText: '20%',
    // value: 0.2,
    // startAngle: -1.55,
    // fill: {
    //   color: red
    // }
  },
  {
    class: 'templeSkill',
    div2: 'circle-inside',
    divBar: 'bar',
    divBox: 'box',
    name: 'Język Angielski',
    valueText: '50%',

  },
];

//function create div for skill

for (let i = 0; i < skillObject.length; i++) {
  const createContainerSkill = document.createElement('div')
  const createDiv2 = document.createElement('div')
  const createDivBar = document.createElement('div')
  const createDivBox = document.createElement('div')
  const createSpan = document.createElement('span')
  createContainerSkill.setAttribute('class', skillObject[i].class)
  createContainerSkill.innerText = skillObject[i].name;
  createDiv2.setAttribute('class', skillObject[i].div2)
  createDivBar.setAttribute('class', skillObject[i].divBar)
  createDivBox.setAttribute('class', skillObject[i].divBox)
  createSpan.innerText = skillObject[i].valueText
  selectDivSkill.append(createContainerSkill)
  createContainerSkill.append(createDiv2)
  createDiv2.append(createDivBar, createDivBox)
  createDivBox.append(createSpan)
}

// life in progress skill
let setting = {
    value: 0.5,
    startAngle: -1.55,
    size:150,
    fill: {
      color: 'red'
    }
}

$('.circle-inside .bar').circleProgress(setting).on('circle-animation-progress'),
function(event, progress,stepValue){

}

//use function
//use function change div
selectArt.addEventListener('mouseenter', showDiv)
selectArt.addEventListener('mouseleave', hiddenDiv)
//use function displaying the menu
selectOpenMenu.addEventListener('click', showFunction);
selectclosMenu.addEventListener('click', closeFunction);