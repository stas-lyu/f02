let body = document.querySelector('body');
let container = document.createElement('div');
container.className = 'container';
body.append(container)
let divForm = document.createElement('div');
divForm.className = 'regFormDiv';
container.append(divForm);
let h3 =  document.createElement('h3');
h3.innerHTML = 'Регистрация пользователя';
divForm.append(h3);
let divRegForm = document.createElement('div');
divForm.append(divRegForm)
let pRequired = document.createElement('p');
pRequired.innerHTML = `* обязательное поле`;
divRegForm.append(pRequired);
let formRegistration = document.createElement('form');
formRegistration.className = 'formRegistration'
divRegForm.append(formRegistration);

let labelName = document.createElement('label');
let inputName = document.createElement('input');
inputName.placeholder = 'Имя'
labelName.append(inputName);
labelName.innerHTML += `Ваше имя *`
formRegistration.append(labelName);

let labelLastName = document.createElement('label');
let inputLastName = document.createElement('input');
inputLastName.placeholder = 'Фамилия'
labelLastName.append(inputLastName);
labelLastName.innerHTML += `Ваша фамилия *`
formRegistration.append(labelLastName);

let labelEmail = document.createElement('label');
let inputEmail = document.createElement('input');
inputEmail.placeholder = 'Email'
labelEmail.append(inputEmail);
labelEmail.innerHTML += `Email *`
formRegistration.append(labelEmail);