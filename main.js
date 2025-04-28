
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Top';
backToTopButton.id = 'backToTop';
document.body.appendChild(backToTopButton);

backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const cards = document.querySelectorAll('.country-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});


const title = document.querySelector('.title');
const text = title.innerText;
title.innerText = '';
let index = 0;

function typeEffect() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();


document.querySelectorAll('.country-card a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Redirecting to more information about ' + this.parentElement.querySelector('h3, h2').innerText + '!');
        window.location.href = this.href;
    });
});


let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}

setInterval(showSlides, 3000);


document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".slideshow img");
    
    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }
    
    setInterval(changeImage, 3000);
});


const images = document.querySelectorAll('.gallery-grid img');

const modal = document.getElementById('fullscreenModal');
const fullscreenImage = document.getElementById('fullscreenImage');
const closeModal = document.getElementById('closeModal');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        fullscreenImage.src = img.src;
        currentIndex = index;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});




prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    fullscreenImage.src = images[currentIndex].src;
});
e
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    fullscreenImage.src = images[currentIndex].src;
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


elementsToFade.forEach(element => {
    observer.observe(element);
});

function validation() {
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var city = document.getElementById("city").value.trim();

    var valid_name_regex = /^[A-Za-z]+$/;
    var valid_age_regex = /^[0-9]+$/;

    var isValid = true;

    
    if (!valid_name_regex.test(name)) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "black";
    }

    
    if (!valid_age_regex.test(age)) {
        document.getElementById("age_error").style.visibility = "visible";
        document.getElementById("age").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = "black";
    }

    
    if (city === "") {
        document.getElementById("city_error").style.visibility = "visible";
        document.getElementById("city").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor = "black";
    }

    if (isValid) {
        
        var confirmation = confirm("Are you sure you want to submit this form?");
        if (!confirmation) {
           
            return false;
        }
    }

    return isValid; //
}


    
    