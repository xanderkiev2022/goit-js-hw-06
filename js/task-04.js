const counter = {
    value: 0,                   // задаємо початкове значення лічильника
    decrement(){                // через функцію змінюємо значення на -1
        this.value -=1;
    },
    increment(){
        this.value +=1;
    },

}
const decrBtn = document.querySelector('[data-action="decrement"]'); // шукаємо якорі
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrBtn.addEventListener('click', function(){                        // додаємо случхача
    counter.decrement()                                              // запускаємо лічильник -
    valueEl.textContent = counter.value;                             // перезаписуємо значення
});
incrBtn.addEventListener('click', function(){
    counter.increment()
    valueEl.textContent = counter.value;
});

// Завдання №4

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.