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

