const listOfItems = document.querySelectorAll('.item'); // рахуємо кількість items
console.log('Number of categories: ', listOfItems.length);

// Покращений варіант через стрілку

const allElOfItems = listOfItems.forEach(el=> {

    console.log('Category: ', el.querySelector('h2').textContent); // через textContent виводимо заголовок
    console.log('Elements: ', el.querySelectorAll('li').length);   // рахуємо кількість elemens
}     );

// Через форОф

// for (const list of listOfItems) {
//     console.log('Category: ', list.querySelector('h2').textContent); 
//     console.log('Elements: ', list.querySelectorAll('li').length); 
// }

// Завдання №1

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5