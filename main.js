feather.replace();
const track = document.querySelector(".slider-track");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".slider-button-left");
const nextBtn = document.querySelector(".slider-button-right");
// const dotsNav = document.querySelector(".slider-nav");
// const dots = Array.from(dotsNav.children);

//Position all the slides in the correct position
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");


}

const next = _ => {
    const currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;

    if (!nextSlide) {
        nextSlide = slides[0];
    }
    moveToSlide(track, currentSlide, nextSlide);
}

const prev = _ => {
    const currentSlide = track.querySelector(".current-slide");
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
    }
    moveToSlide(track, currentSlide, prevSlide);
}

//Right Button
// nextBtn.addEventListener('click', () => { next() });

//Left 
// prevBtn.addEventListener('click', _ => { prev() });

//After Some time
setInterval(() => { next() }, 8000);


//giving fuctionality to the right button in the cards
const btnRight = document.querySelector(".button-right");
const cardContainer = document.querySelector(".card-container");

btnRight.addEventListener('click', _ => {
    cardContainer.scrollLeft += 1000;
});

//See more deals btn
let dealsContainer = document.querySelector(".deals-container");
let dealsToggleBtn = document.querySelector(".deals-more");
let deals = dealsContainer.querySelectorAll(".deals");
console.log(deals);


dealsToggleBtn.addEventListener('click', _ => {
    console.log(deals);
    deals.forEach((deal, i) => {
        if (i > 2)
            deal.classList.toggle("deals-hidden");
    });
    // console.log(deals);

});

