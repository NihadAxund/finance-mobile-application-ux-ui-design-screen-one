var Username = document.getElementById("User_Name");
var Password = document.getElementById("PasswordInput");
document.querySelector(".login").addEventListener("click", function() {
    $.ajax({
        url: "https://localhost:7016/api/Account/Login",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
          "username": `${Username.value}`,
          "password": `${Password.value}`
        }),
        success: function(response) {
          // Yanıtı işleyin
          alert("duz")
          console.log(response);
        },
        error: function(ex) {
          var value = ex.responseText
          if(value=="null"||value==null){
            alert("No User");
          }
          else{
            Login(ex.responseText)
          }
          console.log(ex);
        }
      });
});

function Login(data){
  var newwindow = window.open("login.html");
  newwindow.onload = function() {
    var h1Elementi = newwindow.document.querySelector('h1');
    h1Elementi.innerHTML = data;
  }
  window.close("index.html")
}