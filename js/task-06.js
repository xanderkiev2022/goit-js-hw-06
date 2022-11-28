const inputEl = document.querySelector('#validation-input');        // шукаємо якорі
const inputLenght = inputEl.getAttribute('data-length');            // отримуємо значення довжини з html

const onInputBlur = event => {                                      // створюємо функцію
  if (event.currentTarget.value.length === Number(inputLenght)) {   // довжину робимо числом  
    inputEl.classList.remove('invalid');                            // прибирає клас за умовою
    inputEl.classList.add('valid');                                 // додає клас
  } else {
    inputEl.classList.add('invalid');                               // додає клас
  }};

inputEl.addEventListener('blur', onInputBlur);                      // додаємо случхача на blur + функція

// Завдання №6

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.