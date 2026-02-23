// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

// SPA navigation: show one section at a time
function loadPage(pageId) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none"; // hide all sections
    });

    const activeSection = document.getElementById(pageId);
    if(activeSection){
        activeSection.style.display = "block"; // show target section
    }

    // Close mobile menu after click
    navMenu.classList.remove("show");
}

// Make "View My Work" button go to Projects section
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".btn");
    if(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            loadPage("projects");
        });
    }

    // Show Home section by default
    loadPage("home");
});

// Loan calculator
function calculateLoan(){
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const months = document.getElementById("months").value;

    const error = document.getElementById("error");
    const result = document.getElementById("result");

    error.innerHTML = "";
    result.innerHTML = "";

    if(amount === "" || interest === "" || months === ""){
        error.innerHTML = "Please fill in all fields.";
        return;
    }

    if(amount <= 0 || interest <= 0 || months <= 0){
        error.innerHTML = "Values must be greater than zero.";
        return;
    }

    const totalInterest = (amount * interest) / 100;
    const totalPay = Number(amount) + totalInterest;
    const monthlyPay = totalPay / months;

    result.innerHTML = "Monthly Payment: " + monthlyPay.toFixed(2);
}