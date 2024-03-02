let btn = document.querySelector('.btn00');
const btnsContainer = document.querySelector(".btns");
const imgContainer = document.querySelector(".circle");
let postion = 0;
const imgs = [...imgContainer.children];
console.log(imgs)
const btns = [...btnsContainer.children];
btns.forEach((ele) => {
    ele.addEventListener("click" , (e) => {
        
        postion += 360;
        const index = +ele.getAttribute("data-value");
        const activeBtn = document.querySelector(".btn.show");
        const lastIndex = (activeBtn) ? activeBtn.getAttribute("data-value") : 0;
        imgs.forEach((img)=> img.classList.remove("show"));
        imgs[index].classList.add("show");
        imgContainer.style.transform = `rotate(${postion}deg)`
    })
});
let btn00 = document.getElementsByClassName('btn00');
let btn22 = document.getElementsByClassName('btn22');
let btn33 = document.getElementsByClassName('btn33');
let btn44 = document.getElementsByClassName('btn44');
let btn55 = document.getElementsByClassName('btn55');
let btn66 = document.getElementsByClassName('btn66');
let firstp = document.getElementsByClassName('first-p');
let secondp = document.getElementsByClassName('second-p');
let thirdp = document.getElementsByClassName('third-p');
let fourthp = document.getElementsByClassName('fourth-p');
let fifthp = document.getElementsByClassName('fifth-p');
let sexthp = document.getElementsByClassName('sexth-p');
// let circle = document.getElementsByClassName('circle');
// let first = document.getElementsByClassName('first');
// let second = document.getElementsByClassName('second');
// let third = document.getElementsByClassName('third');
// let fourth = document.getElementsByClassName('fourth');
// let fifth = document.getElementsByClassName('fifth');
// let sexth = document.getElementsByClassName('sexth');


for(let a=0 ; a<btn00.length; a++){
    btn00[a].onclick = function(){

        firstp[a].style.cssText=`
        display: flex; `;

        secondp[a].style.cssText=`
        display:none;`;

        thirdp[a].style.cssText=`
        display:none;`;

        fourthp[a].style.cssText=`
        display:none;`;

        fifthp[a].style.cssText=`
        display:none;`;

        sexthp[a].style.cssText=`
        display:none;`;
    }
}
for(let q=0 ; q<btn22.length; q++){
    btn22[q].onclick=function () {

        firstp[q].style.cssText=`
        display:none;`;

        secondp[q].style.cssText=`
        display:flex;`;

        thirdp[q].style.cssText=`
        display:none;`;

        fourthp[q].style.cssText=`
        display:none;`;

        fifthp[q].style.cssText=`
        display:none;`;

        sexthp[q].style.cssText=`
        display:none;`;
    }
}
for(let s=0 ; s<btn33.length; s++){
    btn33[s].onclick=function () {

        firstp[s].style.cssText=`
        display:none;`;

        secondp[s].style.cssText=`
        display:none;`;

        thirdp[s].style.cssText=`
        display:flex;`;

        fourthp[s].style.cssText=`
        display:none;`;

        fifthp[s].style.cssText=`
        display:none;`;

        sexthp[s].style.cssText=`
        display:none;`;
    }
}
for(let f=0 ; f<btn44.length; f++){
    btn44[f].onclick=function () {
        
        firstp[f].style.cssText=`
        display:none;`;

        secondp[f].style.cssText=`
        display:none;`;

        thirdp[f].style.cssText=`
        display:none;`;

        fourthp[f].style.cssText=`
        display:flex;`;

        fifthp[f].style.cssText=`
        display:none;`;

        sexthp[f].style.cssText=`
        display:none;`;
    }
}
for(let x=0 ; x<btn55.length; x++){
    btn55[x].onclick=function () {
        
        firstp[x].style.cssText=`
        display:none;`;

        secondp[x].style.cssText=`
        display:none;`;

        thirdp[x].style.cssText=`
        display:none;`;

        fourthp[x].style.cssText=`
        display:none;`;

        fifthp[x].style.cssText=`
        display:flex;`;

        sexthp[x].style.cssText=`
        display:none;`;
    }
}
for(let z=0 ; z<btn66.length; z++){
    btn66[z].onclick=function () {

        firstp[z].style.cssText=`
        display:none;`;


        secondp[z].style.cssText=`
        display:none;`;


        thirdp[z].style.cssText=`
        display:none;`;

        fourthp[z].style.cssText=`
        display:none;`;

        fifthp[z].style.cssText=`
        display:none;`;


        sexthp[z].style.cssText=`
        display:flex;`;
    }
}
