window.addEventListener("load", function(){
  setTimeout(() => {
    document.getElementById("preLoader").style.display  = "none";
    document.getElementById("body").style.display = "block";
  },5000)
})


function togglePassword()
{
  const togglePassword = document.getElementById("togglePassword");
  if(togglePassword.style.display === "none")
  {
    togglePassword.style.display = "block";
  }
  else
  {
    togglePassword.style.display = "none";
  } 
}




  // Trigger file input when custom button is clicked
  $("#uploadBtn").click(function() {
    $("#fileupload").click();
  });

  // Preview the image
  $("#fileupload").change(function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $("#preview").attr("src", e.target.result).show();
      };
      reader.readAsDataURL(file);
    }
  });















  // // Show file picker
  // $("#uploadBtn").click(function() {
  //   $("#fileupload").click();
  // });

  // // Preview + Submit to server
  // $("#fileupload").change(function() {
  //   const file = this.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function(e) {
  //       $("#preview").attr("src", e.target.result).show();
  //     };
  //     reader.readAsDataURL(file);

  //     // Submit via AJAX
  //     const formData = new FormData($("#uploadForm")[0]);
  //     $.ajax({
  //       url: "upload.php",
  //       type: "POST",
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       success: function(res) {
  //         alert(res);
  //       },
  //       error: function() {
  //         alert("Upload failed.");
  //       }
  //     });
  //   }
  // });







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




//   $(document).ready(function () {
//   let savedMode = localStorage.getItem('mode');

//   if (!savedMode) {
//     savedMode = 'light';
//     localStorage.setItem('mode', 'light');
//   }

//   if (savedMode === 'light') {
//     $('body').addClass('light-mode');
//     $('#modeToggle').prop('checked', true);
//   } else {
//     $('body').addClass('dark-mode');
//   }

//   // Toggle switch action
//   $('#modeToggle').change(function () {s
//     if ($(this).is(':checked')) {
//       $('body').removeClass('dark-mode').addClass('light-mode');
//       localStorage.setItem('mode', 'light');
//     } else {
//       $('body').removeClass('light-mode').addClass('dark-mode');
//       localStorage.setItem('mode', 'dark');
//     }
//   });
// });
