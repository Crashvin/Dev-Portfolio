function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Control de Animacion texto

document.addEventListener('DOMContentLoaded', () => {
    const words = ['Design', 'Prototype', 'Develop', 'Create'];
    let currentIndex = 0;
    const rotateWordsElement = document.querySelector('.rotate-words');
  
    setInterval(() => {
      rotateWordsElement.textContent = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
    }, 6000); // Cambia la palabra cada 2.5 segundos
  });