'use strict';
const form = document.querySelector('form');
const email = document.querySelector('.email');
const mailFormat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        if (input.value === "") {
            input.nextElementSibling.style.display = 'block';
            input.style.border = '2px solid #ff7a7a';
        } else {
            input.nextElementSibling.style.display = 'none';
            input.style.border = '1px solid #b9b6d3';
        }
    })

    if(email.value.match(mailFormat) || email.value === "") {
        email.style.color = '#222';
    } else {
        email.nextElementSibling.style.display = 'block';
        email.style.border = '2px solid #ff7a7a';
        email.style.color = '#ff7a7a';
    }
});