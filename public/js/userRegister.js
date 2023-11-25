

window.onload = function () {
    
let celular = document.getElementById('phone')

celular.addEventListener('keypress', (event) => {
  event.preventDefault()
  // console.log(event.keyCode)
  let teclaPresionada = String.fromCharCode(event.keyCode)
  console.log(teclaPresionada)
  let teclaParseada = parseInt(teclaPresionada)
  // console.log(valorParsed)
  if(teclaParseada) {
    celular.value = celular.value + teclaParseada
  }})



const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const button = document.getElementById("showPass")

button.addEventListener("click", function () {
    console.log("hola");
    console.log("Este es el boton "+button);
    if (password.type == "password" && rePassword.type == "password") {
        password.type = "text";
        rePassword.type = "text";
    }else {
        password.type = "password";
        rePassword.type = "password";
    }
})
}
