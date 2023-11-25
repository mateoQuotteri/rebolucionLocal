const oldPassword = document.getElementById("password");
const newPassword = document.getElementById("rePassword");
const button = document.getElementById("showPass")

button.addEventListener("click", function () {
    
    if(button.className.includes("showPass")) {
        button.classList.add("eye-x");
        button.classList.remove("showPass")
      }else {
          button.classList.remove("eye-x");
          button.classList.add("showPass")
      }
    if (oldPassword.type == "password" && newPassword.type == "password") {
        oldPassword.type = "text";
        newPassword.type = "text";
    }else {
        oldPassword.type = "password";
        newPassword.type = "password";
    }
})