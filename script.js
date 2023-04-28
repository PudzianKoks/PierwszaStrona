const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        desableOnInteraction: false,
    },
loop: true,

pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden'); 
hiddenElements.forEach((el) => observer.observe(el));


