window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("preLoader").style.display  = "none";
    document.getElementById("body").style.display = "block";
  },5000)
})








function togglePassword(icon, inputId) {
      const input = document.getElementById(inputId);
      if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("bi-eye-slash", "bi-eye");
      } else {
        input.type = "password";
        icon.classList.replace("bi-eye", "bi-eye-slash");
      }
    }