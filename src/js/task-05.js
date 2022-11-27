const inputField = document.querySelector('#name-input');       // шукаємо якорі
const outputField = document.querySelector('#name-output');

inputField.addEventListener('input', event => {                 // додаємо случхача
  return !event.currentTarget.value                             // тернарником, якщо значення undefined
    ? (outputField.textContent = 'Anonymous')                   // span = Anonymous
    : (outputField.textContent = event.currentTarget.value);    // span = event.currentTarget.value
  // if (!event.currentTarget.value) {outputField.textContent = "Anonymous";}
  // outputField.textContent = event.currentTarget.value;
  // console.log('listen')
});

// Завдання №5

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
