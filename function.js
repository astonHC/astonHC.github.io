// COPYRIGHT (C) HARRY CLARK 2024

// STUDENT NO. 230315257

// CS1_IAD PORTFOLIO 1

/* I'M SURE THERE IS A BETTER WAY TO ORGANISE VARIABLES IN JS ¯\_(ツ)_/¯ */

const HEADER = document.querySelector("main-header");

let TODAY = Date();
let DAY;
let MONTH;
let YEAR;
let FUTURE_DATE;

let EMAIL;
let IS_VALID_EMAIL;

window.onscroll = () =>
{
    HEADER.classList.toggle('sticky', window.scrollY > 100);
}

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

document.getElementById('Artstation').addEventListener('click', function(event) 
{ 
    if (event.target === this) 
    {
        window.location.href = 'https://www.artstation.com/hazzaaa';
    }
});

document.getElementById('GitHub').addEventListener('click', function(event) 
{ 
    if (event.target === this) 
    {
        window.location.href = 'https://github.com/hazzaaclark';
    }
});

/* BASIC STRING EVALUATION CHECKER TO DETERMINE THE VALIDITY OF WHICH DATES ARE */
/* ARE ABLE TO BE USED (EVERYTHING PRECEEDING THE PRESENT DAY, INCLUDING THE PRESENT) */

/* THIS WILL BE DONE BY EVALUATING THE LENGTH OF THE GIVEN STRING */
/* FOR REACH PRE-REQUISTIE */

function CHECK_VALID_DATE()
{
    DAY = String(TODAY.getDate() + 1).padStart(2, '0');
    MONTH = String(TODAY.getMonth() + 1).padStart(2, '0');
    YEAR = String(TODAY.getFullYear());

    FUTURE_DATE = YEAR + '' + MONTH + '' + DAY;
}

/* ELEMENT EVALUATION CHECK TO BE ABLE TO CHECK FOR INPUT PROVIDED INTO THE EMAIL FIELD */
/* THIS WILL WORK IN TANDEM WITH THE VALIDATEFORM FUNCTION */

function CHECK_VALID_EMAILS()
{
    EMAIL = document.getElementById("email").value;
    IS_VALID_EMAIL = document.getElementById("confirm_email").value;

    // DISTINGUISH BETWEEN TWO EMAIL FIELDS AND ALERT THE USER IF THE 
    // EMAILS DO NOT MATCH

    return EMAIL !== IS_VALID_EMAIL ? (alert("Emails don't match"), false) : true;
}

/* USE VALIDATEFORMS TO DETERMINE IF ALL OF THE PRE-REQUISITES HAVE BEEN MET */

function VALIDATE_FORM()
{
    i = 0;
    var MESSAGE = "Form data:\n\n";

    for(var KEY in this)
    {
        if(this.hasOwnProperty(KEY))
        {
            if(i == 1) 
            {
                MESSAGE += KEY + ": " + " minutes\n";
            } 
            else 
            {
                message += key + ": " + "\n";
            }
        }

        i++;
    }
}

