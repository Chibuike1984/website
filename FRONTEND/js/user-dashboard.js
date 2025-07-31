window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("preLoader").style.display  = "none";
    document.getElementById("body").style.display = "block";
  },5000)
})








function More()
{
  const external = document.getElementById("external");
  if(external.style.display === "none")
  {
    external.style.display = "block";
  }
  else
  {
    external.style.display = "none";
  } 
}






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

