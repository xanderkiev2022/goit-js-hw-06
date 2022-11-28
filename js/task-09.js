function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color')
const clrBtn = document.querySelector('.change-color');

// 

const onBackgroundColorChange = event => {
  bodyEl.style.backgroundColor = getRandomHexColor();     //фон змінюємо
  spanEl.textContent = getRandomHexColor();               //замінюємо textContent на код кольору
}

clrBtn.addEventListener('click', onBackgroundColorChange);

// Завдання 9

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.