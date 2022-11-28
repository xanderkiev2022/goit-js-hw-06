const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const createEl = ingredients.map(el => {                  // перебираємо масив
  const itemEl = document.createElement('li');            // створюємо li
  itemEl.classList.add('item');                           // додаємо клас
  itemEl.textContent = el;                                // заповнюємо li списком з масиву

  return itemEl;                                          // undefined без return
});

const ingrList = document.querySelector('#ingredients');  // шукаємо ul
ingrList.append(...createEl);                             // додаємо створені li до ul 

console.log(ingrList);

// Завдання №2

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
