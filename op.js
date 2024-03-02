window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length ; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------
window.addEventListener('scroll',bottom);

function bottom(){
  var bottoms = document.querySelectorAll('.bottom');

  for(var b = 0; b < bottoms.length ; b++){

    let windowheight = window.innerHeight;
    let revealbottom = bottoms[b].getBoundingClientRect().top;
    let bottompoint = 100;

    if(revealbottom < windowheight - bottompoint){
      bottoms[b].classList.add('active');
    }
    else{
      bottoms[b].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------
window.addEventListener('scroll',left);

function left(){
  var lefts = document.querySelectorAll('.left');

  for(var l = 0; l < lefts.length ; l++){

    let windowheight = window.innerHeight;
    let revealleft = lefts[l].getBoundingClientRect().top;
    let leftpoint = 100;

    if(revealleft < windowheight - leftpoint){
      lefts[l].classList.add('active');
    }
    else{
      lefts[l].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------


window.addEventListener('scroll',right);

function right(){
  var rights = document.querySelectorAll('.right');
  
  for(var r = 0; r < rights.length ; r++){
    
    let windowheight = window.innerHeight;
    let revealright = rights[r].getBoundingClientRect().top;
    let rightpoint = 100;
    
    if(revealright < windowheight - rightpoint){
      rights[r].classList.add('active');
    }
    else{
      rights[r].classList.remove('active');
    }
  }
}
// ----------------------------------------------------------
window.addEventListener("scroll", rotate);

function rotate() {
  var rotates = document.querySelectorAll(".rotate");

  for (var t = 0; t < rotates.length; t++) {
    let windowheight = window.innerHeight;
    let revealtop = rotates[t].getBoundingClientRect().top;
    let revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      rotates[t].classList.add("active");
    } else {
      rotates[t].classList.remove("active");
    }
  }
}
// ----------------------------------------------------------

let arr = document.getElementById('arrow');

window.onscroll = function(){
    if(scrollY >= 740)
    {
        arr.style.display ='block';
    }else{
        arr.style.display ='none';
    }
}

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------


// let first = document.getElementsByClassName('first');
// let second = document.getElementsByClassName('second');
// let third = document.getElementsByClassName('third');
// let fourth = document.getElementsByClassName('fourth');
// let card1 = document.getElementsByClassName('card1');
// let card2 = document.getElementsByClassName('card2');
// let card3 = document.getElementsByClassName('card3');
// let card4 = document.getElementsByClassName('card4');






// for(let a=0 ; a<first.length; a++){
//     first[a].onclick = function(){
//         card1[a].style.display = 'flex';  
//         card2[a].style.display = 'none';  
//         card3[a].style.display = 'none';  
//         card4[a].style.display = 'none';  
// }
// }
// for(let b=0 ; b<first.length; b++){
//     second[b].onclick = function(){
//         card2[b].style.display = 'flex';  
//         card1[b].style.display = 'none';    
//         card3[b].style.display = 'none';  
//         card4[b].style.display = 'none';  
// }
// }
// for(let c=0 ; c<first.length; c++){
//     third[c].onclick = function(){
//         card3[c].style.display = 'flex';  
//         card1[c].style.display = 'none';  
//         card2[c].style.display = 'none';  
//         card4[c].style.display = 'none';  
// }
// }
// for(let d=0 ; d<first.length; d++){
//     fourth[d].onclick = function(){
//         card4[d].style.display = 'flex';  
//         card1[d].style.display = 'none';  
//         card2[d].style.display = 'none';  
//         card3[d].style.display = 'none';  
// }
// }


let trailer1 = document.getElementsByClassName('trailer1');
let trailer2 = document.getElementsByClassName('trailer2');
let trailer3 = document.getElementsByClassName('trailer3');
let trailer4 = document.getElementsByClassName('trailer4');
let trailer5 = document.getElementsByClassName('trailer5');
let trailer6 = document.getElementsByClassName('trailer6');
let trailer7 = document.getElementsByClassName('trailer7');
let trailer8 = document.getElementsByClassName('trailer8');
let trailer9 = document.getElementsByClassName('trailer9');
let trailer10 = document.getElementsByClassName('trailer10');
let trailer11 = document.getElementsByClassName('trailer11');
let trailer12 = document.getElementsByClassName('trailer12');
let trailer13 = document.getElementsByClassName('trailer13');

let btn1 = document.getElementsByClassName('btn1');
let btn2 = document.getElementsByClassName('btn2');
let btn3 = document.getElementsByClassName('btn3');
let btn4 = document.getElementsByClassName('btn4');
let btn5 = document.getElementsByClassName('btn5');
let btn6 = document.getElementsByClassName('btn6');
let btn7 = document.getElementsByClassName('btn7');
let btn8 = document.getElementsByClassName('btn8');
let btn9 = document.getElementsByClassName('btn9');
let btn10 = document.getElementsByClassName('btn10');
let btn11 = document.getElementsByClassName('btn11');
let btn12 = document.getElementsByClassName('btn12');
let btn13 = document.getElementsByClassName('btn13');


let hide1 = document.getElementsByClassName('hide1');
let hide2 = document.getElementsByClassName('hide2');
let hide3 = document.getElementsByClassName('hide3');
let hide4 = document.getElementsByClassName('hide4');
let hide5 = document.getElementsByClassName('hide5');
let hide6 = document.getElementsByClassName('hide6');
let hide7 = document.getElementsByClassName('hide7');
let hide8 = document.getElementsByClassName('hide8');
let hide9 = document.getElementsByClassName('hide9');
let hide10 = document.getElementsByClassName('hide10');
let hide11 = document.getElementsByClassName('hide11');
let hide12 = document.getElementsByClassName('hide12');
let hide13 = document.getElementsByClassName('hide13');








for(let t1=0 ; t1<btn1.length; t1++){
  btn1[t1].onclick = function(){ 
      trailer1[t1].style.opacity = '1';  
}
}
for(let t2=0 ; t2<btn2.length; t2++){
  btn2[t2].onclick = function(){ 
      trailer2[t2].style.opacity = '1';  
}
}
for(let t3=0 ; t3<btn3.length; t3++){
  btn3[t3].onclick = function(){ 
      trailer3[t3].style.opacity = '1';  
}
}
for(let t4=0 ; t4<btn4.length; t4++){
  btn4[t4].onclick = function(){ 
      trailer4[t4].style.opacity = '1';  
}
}
for(let t5=0 ; t5<btn5.length; t5++){
  btn5[t5].onclick = function(){ 
      trailer5[t5].style.opacity = '1';  
}
}
for(let t6=0 ; t6<btn6.length; t6++){
  btn6[t6].onclick = function(){ 
      trailer6[t6].style.opacity = '1';  
}
}
for(let t7=0 ; t7<btn7.length; t7++){
  btn7[t7].onclick = function(){ 
      trailer7[t7].style.opacity = '1';  
}
}
for(let t8=0 ; t8<btn8.length; t8++){
  btn8[t8].onclick = function(){ 
      trailer8[t8].style.opacity = '1';  
}
}
for(let t9=0 ; t9<btn9.length; t9++){
  btn9[t9].onclick = function(){ 
      trailer9[t9].style.opacity = '1';  
}
}
for(let t10=0 ; t10<btn10.length; t10++){
  btn10[t10].onclick = function(){ 
      trailer10[t10].style.opacity = '1';  
}
}
for(let t11=0 ; t11<btn11.length; t11++){
  btn11[t11].onclick = function(){ 
      trailer11[t11].style.opacity = '1';  
}
}
for(let t12=0 ; t12<btn12.length; t12++){
  btn12[t12].onclick = function(){ 
      trailer12[t12].style.opacity = '1';  
}
}
for(let t13=0 ; t13<btn13.length; t13++){
  btn13[t13].onclick = function(){ 
      trailer13[t13].style.opacity = '1';  
}
}

// ----------------------------------------------------------------


for(let h1=0 ; h1<hide1.length; h1++){
  hide1[h1].onclick = function(){ 
      trailer1[h1].style.opacity = '0';  
}
}
for(let h2=0 ; h2<hide2.length; h2++){
  hide2[h2].onclick = function(){ 
      trailer2[h2].style.opacity = '0';  
}
}
for(let h3=0 ; h3<hide3.length; h3++){
  hide3[h3].onclick = function(){ 
      trailer3[h3].style.opacity = '0';  
}
}
for(let h4=0 ; h4<hide4.length; h4++){
  hide4[h4].onclick = function(){ 
      trailer4[h4].style.opacity = '0';  
}
}
for(let h5=0 ; h5<hide5.length; h5++){
  hide5[h5].onclick = function(){ 
      trailer5[h5].style.opacity = '0';  
}
}
for(let h6=0 ; h6<hide6.length; h6++){
  hide6[h6].onclick = function(){ 
      trailer6[h6].style.opacity = '0';  
}
}
for(let h7=0 ; h7<hide7.length; h7++){
  hide7[h7].onclick = function(){ 
      trailer7[h7].style.opacity = '0';  
}
}
for(let h8=0 ; h8<hide8.length; h8++){
  hide8[h8].onclick = function(){ 
      trailer8[h8].style.opacity = '0';  
}
}
for(let h9=0 ; h9<hide9.length; h9++){
  hide9[h9].onclick = function(){ 
      trailer9[h9].style.opacity = '0';  
}
}
for(let h10=0 ; h10<hide10.length; h10++){
  hide10[h10].onclick = function(){ 
      trailer10[h10].style.opacity = '0';  
}
}
for(let h11=0 ; h11<hide11.length; h11++){
  hide11[h11].onclick = function(){ 
      trailer11[h11].style.opacity = '0';  
}
}
for(let h12=0 ; h12<hide12.length; h12++){
  hide12[h12].onclick = function(){ 
      trailer12[h12].style.opacity = '0';  
}
}
for(let h13=0 ; h13<hide13.length; h13++){
  hide13[h13].onclick = function(){ 
      trailer13[h13].style.opacity = '0';  
}
}

// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
