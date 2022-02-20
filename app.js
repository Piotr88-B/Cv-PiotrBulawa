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
  
}
const closeFunction = () => {
 selectUlMenu.style ='none'
}
selectLink.forEach(e => e.addEventListener('click', () => {
selectUlMenu.style = 'none'
}))

// create object

let skillObject = [{
    class: 'templeSkill fade-in',
    div2: 'circle-inside html',
    divBar: 'bar',
    divBox: 'box',
    name: 'html',
    valueText: '70%',
    value: 0.7,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }

  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside css',
    divBar: 'bar',
    divBox: 'box',
    name: 'css',
    valueText: '60%',
    value: 0.6,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside js',
    divBar: 'bar',
    divBox: 'box',
    name: 'JavaScript',
    valueText: '50%',
    value: 0.5,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside java',
    divBar: 'bar',
    divBox: 'box',
    name: 'Java',
    valueText: '40%',
    value: 0.2,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside git',
    divBar: 'bar',
    divBox: 'box',
    name: 'Git',
    valueText: '20%',
    value: 0.2,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside vsc',
    divBar: 'bar',
    divBox: 'box',
    name: 'Visual Studio Code',
    valueText: '60%',
    value: 0.6,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside as',
    divBar: 'bar',
    divBox: 'box',
    name: 'Android Studio',
    valueText: '20%',
    value: 0.2,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
  },
  {
    class: 'templeSkill fade-in',
    div2: 'circle-inside ja',
    divBar: 'bar',
    divBox: 'box',
    name: 'Język Angielski',
    valueText: '40%',
    value: 0.4,
    startAngle: -1.55,
    size: 150,
    fill: {
      color: '#111930'
    }
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
const selectAllCircele = document.querySelectorAll('.circle-inside', '.bar')




const selectFaders = document.querySelectorAll('.fade-in')
const settup ={
threshold: 0,
rootMargin: "0px 0px -50px 0px"
}


const functionScrol = () => {
  for (let i = 0; i < skillObject.length; i++) {
    $(selectAllCircele[i]).circleProgress(skillObject[i]).on('circle-animation-progress',
      function (event, progress, stepValue) {
        $(this).parent().find('span').text(String(stepValue.toFixed(2).substr(2) + "%"))
      });
  }
}

const aOnScroll = new IntersectionObserver(function(
  entries,
  aOnScroll
){
  entries.forEach(entry =>{
    if(!entry.isIntersecting){
      return;
    }else{
   entry.target.classList.add('appear');
      aOnScroll.unobserve(entry.target)
      functionScrol()
    }
  })
}, 
settup);

selectFaders.forEach(fader => {
  aOnScroll.observe(fader)
});

// gallery function menu
(function(){
  'use strict';
  $('ul.filters > li').on('click',function(e){
    e.preventDefault();
    $('ul.filters> li').removeClass('active')
    $(this).addClass('active')
  })
 $('.card').mouseenter(function(){
  $('.card-overlay').css({'top': '-100%'})
    $('.card-hover').css({
      'top': '0'
    }).mouseleave(function(){
 $('.card-overlay').css({
   'top': '0'
 })
  $('.card-hover').css({
    'top': '100%'
  })

    })


 })


})(jQuery);



//use function
//use function change div
selectArt.addEventListener('mouseenter', showDiv)
selectArt.addEventListener('mouseleave', hiddenDiv)
//use function displaying the menu
selectOpenMenu.addEventListener('click', showFunction);
selectclosMenu.addEventListener('click', closeFunction);

