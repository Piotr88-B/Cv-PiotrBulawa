let chan= 1;
const selectEle = document.querySelector('.btn-manual')

setInterval(function(){
 document.getElementById('radio' + chan).checked = true;
 chan++;
 if(chan>4){
chan=1;
 }
},4000);

