// COPYRIGHT (C) HARRY CLARK 2024

// STUDENT NO. 230315257

// CS1_IAD PORTFOLIO 1

const HEADER = document.querySelector("main-header");

window.addEventListener("SCROLL", function()
{
    HEADER.classList.toggle("sticky", window.scrollY > 100);
});

document.getElementById('CARD_1').addEventListener('click', function(event) 
{ 
    if (event.target === this) 
    {
        window.location.href = 'https://github.com/hazzaaclark/MD68000';
    }
});

document.getElementById('CARD_2').addEventListener('click', function(event) 
{ 
    if (event.target === this) 
    {
        window.location.href = 'https://github.com/hazzaaclark/gdiGhidra';
    }
});

document.getElementById('CARD_3').addEventListener('click', function(event) 
{ 
    if (event.target === this) 
    {
        window.location.href = 'https://github.com/hazzaaclark/68K_ASM';
    }
});


