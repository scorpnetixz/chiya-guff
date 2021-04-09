let hamburger = document.querySelector('.ham-container');
let navItems = document.querySelector('.nav-items');
let height = document.scrollHeight;

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    navItems.classList.toggle('active');
});


// scroll button
let  arrowContainer = document.querySelector('.arrow-container');

window.addEventListener("scroll", ()=>{
    let top = document.documentElement.scrollTop;
    let body = document.body.scrollTop;
    if(top > 250 || body > 250){
        arrowContainer.style.right = "0";
        arrowContainer.style.opacity = "1";
        arrowContainer.style.visibility = "visible";
        navItems.classList.remove('active');
        
    } else{
        arrowContainer.style.right = "0";
        arrowContainer.style.opacity = "0";
        arrowContainer.style.visibility = "hidden";

    }
});

arrowContainer.addEventListener('click', ()=>{
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})

// rating star

let star = document.querySelectorAll('.star');

for(let i = 0; i < star; i++){
    star[i].addEventListener('click', ()=>{
        console.log(e.target);
        star[i].classList.toggle('rated-color');
        // star[i].style.fill = "orange";
    })
}

// search bar 

let searchIcon = document.querySelector('.search-icon');
let searchImg = document.querySelector('.search-icon-img');

searchIcon.addEventListener('click', ()=>{
    let searchBox = document.querySelector('.search-box');
    searchBox.classList.toggle('active');
});

window.addEventListener('click', (e)=>{
    let searchBox = document.querySelector('.search-box');
    if(e.target != searchIcon && e.target != searchImg){
        searchBox.classList.remove('active');
    }
});

// rating stars

let ratingStar = document.querySelectorAll('.rating-container');


for(let i = 0; i < ratingStar.length; i++){
    ratingStar[i].addEventListener('click', function (e) {
        if (e.target.nodeName === 'DIV') {
            var currentSibling = e.target;
            var nextSibling = e.target;
            currentSibling.classList.add('active');
            while ((currentSibling = currentSibling.previousElementSibling)) {
                currentSibling.classList.add('active');
            }
            while ((nextSibling = nextSibling.nextElementSibling)) {
                nextSibling.classList.remove('active');
            }
        }
    });
};



