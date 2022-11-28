const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChange = event => {
    console.log(event.currentTarget.value);
    textEl.style.fontSize = `${event.currentTarget.value}px`;  // присвоюємо нове значення fontSize 
}

inputEl.addEventListener('input', onInputChange);

// Завдання 7

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
