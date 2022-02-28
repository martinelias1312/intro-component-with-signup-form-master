'use strict';
const form = document.querySelector('form');
const email = document.querySelector('.email');
const mailFormat = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        if(input.value === "") {
            input.nextElementSibling.style.display = 'block';
        } else if (!email.value.match(mailFormat)){
            input.nextElementSibling.style.display = 'block';
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    })
});