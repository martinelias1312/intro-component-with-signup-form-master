'use strict';
const form = document.querySelector('form');
const email = document.querySelector('.email');
const mailFormat = 'regex';
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        if(input.value === "") {
            input.nextElementSibling.classList.add('error-show');
            input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
        } else {
            input.nextElementSibling.classList.remove('error-show');
            input.nextElementSibling.innerHTML = "";
        }
    })
});