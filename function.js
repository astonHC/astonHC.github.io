// COPYRIGHT (C) HARRY CLARK 2024

// STUDENT NO. 230315257

// CS1_IAD PORTFOLIO 1

const HEADER = document.querySelector("main-header");

window.addEventListener("SCROLL", function()
{
    HEADER.classList.toggle("sticky", window.scrollY > 100);
});