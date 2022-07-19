// Nav bar
const menu=document.querySelector('.menu');
const close=document.querySelector('.close');
const nav=document.querySelector('nav');

menu.addEventListener('click',function(){
    nav.classList.add('open-nav');
});
close.addEventListener('click',function(){
    nav.classList.remove('open-nav');
});

// animation
const texts = ["Web Developer", "GUI Developer", "Game Developer", "Student"];
let count = 0;
let index = 0;
let current = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    current = texts[count];
    letter = current.slice(0,++index);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === current.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());