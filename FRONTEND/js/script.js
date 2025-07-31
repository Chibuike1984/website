window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("preLoader").style.display  = "none";
    document.getElementById("body").style.display = "block";
  },5000)
})





document.getElementById('menu').addEventListener('click', function(event) {
  event.stopPropagation();
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
});

window.addEventListener('click', function(event) {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.classList.contains('show') && !sidebar.contains(event.target)) {
    sidebar.classList.remove('show');
  }
});

document.querySelector('.sidebar').addEventListener('click', function(event) {
  event.stopPropagation();
});












  const container = document.querySelector('.scrolling');
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('active');
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });








  const titles = document.querySelectorAll('.accordion-title');
  const closeButtons = document.querySelectorAll('.close');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const item = title.parentElement;
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      // Toggle current
      item.classList.toggle('active');
    });
  });

  closeButtons.forEach(close => {
    close.addEventListener('click', (e) => {
      const item = close.closest('.accordion-item');
      item.classList.remove('active');
      e.stopPropagation(); 
    });
  });












  // Delay showing the modal by 5 seconds (5000ms)
  window.onload = function () {
    setTimeout(function () {

      modal = document.getElementById("welcomeModal");
      modal.classList.add("show")
      modal.style.display = "flex";
    },10000);
  };

  // Close modal when "X" or "Continue browsing" is clicked
  document.querySelector(".close").addEventListener("click", closeModal);

  function closeModal() {
    document.getElementById("welcomeModal").style.display = "none";
  }













 const slides = document.querySelectorAll(".slider img");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // slides every 3 seconds
