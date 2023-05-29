var Username = document.getElementById("User_Name");
var Surname = document.getElementById("User_Surname");
var Age = document.getElementById("User_Age");
var SeriaNo = document.getElementById("User_SeriaNo");
var Password = document.getElementById("PasswordInput");
document.querySelector(".login").addEventListener("click", function() {
    $.ajax({
        url: "https://localhost:7016/api/Account/SignIn",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            "name": Username.value,
            "surname": Surname.value,
            "seriaNo": SeriaNo.value,
            "age": Age.value,
            "password": Password.value
        }),
        success: function(response) {
          // Yanıtı işleyin
          alert("duz")
          console.log(response);
        },
        error: function(ex) {
          alert(ex.responseText)
          if(ex.responseText=="true"){
            window.location.replace("index.html")
           // window.close()
          }
          console.log(ex);
        }
      });
  });