// navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".navi");
    navBar.classList.toggle("active");
}

// image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

// initializeSlide();

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSLide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSLide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSLide(slideIndex);
}

// form validation

function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

// form - viewsPAss 

function togglePassword(inputId, icon) {
    var passwordInput = document.getElementById(inputId);
    var iconElement = icon.querySelector("i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconElement.classList.remove("fa-eye");
        iconElement.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        iconElement.classList.remove("fa-eye-slash");
        iconElement.classList.add("fa-eye");
    }
}

// search-bar 

$(document).ready(function(){
    $("#myinput").on("keyup", function() {
        var value = $(this).val().toLowerCase();

        $(".product-list .product-item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});