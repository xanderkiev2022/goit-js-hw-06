const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');     // шукаємо gallery

const createGallery = images.reduce((acc, image) => {     // перебираємо масив фото
  let string = `<li><img class="gallery-item" src="${image.url}" alt=${image.alt}></li>`; // заповнюємо шаблонними рядками галерею
  return acc + string;                                    // робимо один рядок html
}, '');

galleryEl.insertAdjacentHTML(                             // вставляємо масим фото
  'afterend',                                             // вибираємо місце розгортування
  createGallery                                           // вибираємо об"єкт розгортування
);

// Завдання №3

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
