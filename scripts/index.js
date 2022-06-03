/**
 * Hecho por:
 *  Carlos Mario Duque Mejia
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

var input = document.getElementById("username");
let personaje

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("start").click();
    }
  });

document.getElementById("start").onclick=function (){

    let username =input.value
        //exercises = new test.Exercises()
        
        if(username === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Ingresa un nombre de usuario',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
         }else{
           if(document.getElementById("link").checked){
             personaje="link"
           }else{
             personaje="zelda"
           }
            sessionStorage.setItem("personaje",personaje)
            sessionStorage.setItem("username",username)
            location.href="exercises.html"
         }
}