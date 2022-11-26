// const counter = {
//     value: 0,
//     increment() {
//         console.log('increment -> this', this);
//         this.value += 1;
//     },
//     decrement() {
//         console.log('decrement -> this', this);
//         this.value -= 1;
//     },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на декремент');

//     counter.decrement();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//     console.log('Кликнули на инкремент');

//     counter.increment();
//     console.log(counter);
//     valueEl.textContent = counter.value;
// });

// console.log(window);




// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.