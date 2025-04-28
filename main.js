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

    return isValid;}

    $('#sort').sortable();

$(function(){
   
    $('#accordion').accordion();
});

$('#tabs').tabs();
