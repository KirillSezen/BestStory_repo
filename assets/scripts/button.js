// Функция для генерации случайного цвета в формате RGB
function getRandomColor() {
    // Генерируем случайное число от 0 до 255 для каждой компоненты цвета
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Возвращаем цвет в формате RGB
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Функция для смены цветов хедера, текста и футера
  function changeColors() {
    // Получаем элементы хедера, текста и футера
    let header = document.querySelector('header');
    let title = document.querySelector('h2');
    let footer = document.querySelector('footer');
    // Генерируем случайные цвета для хедера, текста и футера
    let headerColor = getRandomColor();
    let textColor = getRandomColor();
    let footerColor = getRandomColor();
    // Применяем цвета к элементам через CSS переменные
    header.style.backgroundColor = headerColor;
    footer.style.backgroundColor = footerColor;
    title.style.color = textColor;
    // Добавляем классы для хедера, текста и футера, чтобы активировать медиа-запросы
  }