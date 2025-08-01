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








    // SEARCHING BY EXACT NAME WITH BUTTON
  document.getElementById("searchBtn").addEventListener("click", function () {
    const filter = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      console.log(rowText);
      row.style.display = rowText.includes(filter) ? "" : "none";
    });
  });








let rowsPerPage = parseInt(document.getElementById("rowsLimitSelect").value);
const table = document.querySelector(".user-table");
const tbody = table.querySelector("tbody");
const rows = tbody.querySelectorAll("tr");
const pagination = document.getElementById("pagination");

let currentPage = 1;

function displayRows(page) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  rows.forEach((row, index) => {
    row.style.display = index >= start && index < end ? "" : "none";
  });
}

function setupPagination() {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(rows.length / rowsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.classList.add("page-btn");
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", function () {
      currentPage = i;
      displayRows(currentPage);
      document.querySelectorAll(".page-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
    });

    pagination.appendChild(btn);
  }
}

// When user changes the limit from dropdown
document.getElementById("rowsLimitSelect").addEventListener("change", function () {
  rowsPerPage = parseInt(this.value);
  currentPage = 1;
  displayRows(currentPage);
  setupPagination();
});

// Initial load
displayRows(currentPage);
setupPagination();










  $(document).ready(function()
    {
       $("#dialog").dialog()
			.dialog("close");
	 $("#Addpost").click(function(){
	  $("#dialog").dialog({closeOnEscape:false, dialogClass:"dialog-no-close",
       position:{my: "center", at: "center", of: window}, height:800, width: 600,
        title:"Setup A Tasks Project ✍️" ,show: { effect: 'drop', direction: "up" } , 
       hide: { effect: 'drop', direction: "up" },modal:true, buttons:[
        {
            text:"Cancel",
            title:"close",
            class:"dialog-no-close ui-cancel",
            click: function() { $(this).dialog("close"); }
        },
        {
            text:"Proceed",
            class:"dialog-no-close ui-proceed",
            click: function(){ 
                const form = $('#Form')[0];
                //const formData = new FormData(form);

                if(!form.checkValidity()){
                    alert("Please fill in all required fields!.");
                    return;
                }
             }
        }
       ]
     })
	  .dialog(open)
	  .css("color", "#fff")
      
	})
	});






  $(document).ready(function()
    {
       $("#dialogview").dialog()
			.dialog("close");
	 $("#view").click(function(){
	  $("#dialogview").dialog({closeOnEscape:false, dialogClass:"dialog-no-close",
       position:{my: "center", at: "center", of: window}, height:800, width: 600,
        title:"Setup A Tasks Project ✍️" ,show: { effect: 'drop', direction: "up" } , 
       hide: { effect: 'drop', direction: "up" },modal:true, buttons:[
        {
            text:"Cancel",
            title:"close",
            class:"dialog-no-close ui-cancel",
            click: function() { $(this).dialog("close"); }
        },
        {
            text:"Proceed",
            class:"dialog-no-close ui-proceed",
            click: function(){ 
                const form = $('#Form')[0];
                //const formData = new FormData(form);

                if(!form.checkValidity()){
                    alert("Please fill in all required fields!.");
                    return;
                }
             }
        }
       ]
     })
	  .dialog(open)
	  .css("color", "#fff")
      
	})
	});














  $(document).ready(function()
    {
       $("#dialogexport").dialog()
			.dialog("close");
	 $("#export").click(function(){
	  $("#dialogexport").dialog({closeOnEscape:false, dialogClass:"dialog-no-close",
       position:{my: "center", at: "center", of: window}, height:800, width: 600,
        title:"Export Record History ✍️" ,show: { effect: 'drop', direction: "up" } , 
       hide: { effect: 'drop', direction: "up" },modal:true, buttons:[
        {
            text:"Cancel",
            title:"close",
            class:"dialog-no-close ui-cancel",
            click: function() { $(this).dialog("close"); }
        },
        {
            text:"Proceed",
            class:"dialog-no-close ui-proceed",
            click: function(){ 
                const form = $('#Form')[0];
                //const formData = new FormData(form);

                if(!form.checkValidity()){
                    alert("Please fill in all required fields!.");
                    return;
                }
             }
        }
       ]
     })
	  .dialog(open)
	  .css("color", "#fff")
      
	})
	});







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



