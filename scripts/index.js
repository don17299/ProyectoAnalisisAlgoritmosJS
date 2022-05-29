import * as storage from "./storage.js"

document.getElementById("start").onclick=function (){

    let username = document.getElementById('username').value
        //exercises = new test.Exercises()
        
        if(username === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Ingresa un nombre de usuario',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
         }else{
             storage.crear("username",username)
            location.href="exercises.html"
         }
}