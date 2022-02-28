'use strict';
const form = document.querySelector('form');
const email = document.querySelector('.email');
const mailFormat = 'regex';
const inputs = document.querySelectorAll('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    inputs.forEach(input => {
        console.log(input.nextElementSibling);
        if(input.value == "") {
            input.nextElementSibling.style.display = 'block';
            input.nextElementSibling.innerHTML = `${input.name} cannot be empty`;
        } else {
            input.nextElementSibling.style.display = 'none';
            input.nextElementSibling.innerHTML = "";
        }
    })
});