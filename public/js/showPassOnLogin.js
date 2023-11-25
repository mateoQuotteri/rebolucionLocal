



    
    
    
    const password = document.getElementById("password");
    const button = document.getElementById("showPass")
    
    button.addEventListener("click", function () {
        console.log("Hola");
        if(button.className.includes("showPass")) {
      button.classList.add("eye-x");
      button.classList.remove("showPass")
    }else {
        button.classList.remove("eye-x");
        button.classList.add("showPass")
    }
      
        if (password.type == "password" ) {
            password.type = "text";
           
        }else {
            password.type = "password";
        }
    })

    