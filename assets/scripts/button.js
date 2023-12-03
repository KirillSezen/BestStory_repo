// Функция для генерации случайного цвета в формате RGB
function getRandomColor() {
    
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function changeColors() {
    let header = document.querySelector('header');
    let title = document.querySelector('h2');
    let footer = document.querySelector('footer');
    
    let headerColor = getRandomColor();
    let textColor = getRandomColor();
    let footerColor = getRandomColor();
    
    header.style.backgroundColor = headerColor;
    footer.style.backgroundColor = footerColor;
    title.style.color = textColor;
  }