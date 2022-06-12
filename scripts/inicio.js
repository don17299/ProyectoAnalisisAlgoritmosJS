/*
 * Hecho por:
 *  Carlos Mario Duque Mejía
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */
import { getUsers, } from "./firebase.js"

var input = document.getElementById("userid");
let personaje = "link"

/**
 * redirecciona al boton con enter.
 */
input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("start").click();
  }
});

/**
 * evento que permite loguearse, este verifica si ya existe y si es el caso ordena que sea actualizado
 */
document.getElementById("start").onclick = async () => {

  let myself = document.getElementById("start")
  myself.disabled = true
  let userid = input.value

  if (userid === '') {
    Swal.fire({
      title: 'Error!',
      text: 'Ingresa tu identificación',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    myself.disabled = false
  } else {

    document.getElementById("loading").textContent = "Cargando..."

    const querySnapshot = await getUsers()
    let repetido = false
    let idRepetido = "n.a"

    await querySnapshot.forEach(doc => {
      if (doc.data().userid === userid) {
        repetido = true
        idRepetido = doc.id
      }
    });

    if (repetido) {
      await Swal.fire({
        title: 'El usuario ya existe',
        text: 'Reemplazaremos la información almacenada con tu nuevo intento.',
        icon: 'info',
        confirmButtonText: 'Ok'
      });
    }
    sessionStorage.setItem("edit_id", idRepetido)

    document.getElementById("loading").textContent = ""

    if (document.getElementById("link").checked) {
      personaje = "link"
    } else {
      personaje = "zelda"
    }
    sessionStorage.setItem("personaje", personaje)
    sessionStorage.setItem("userid", userid)
    location.href = "exercises.html"
  }
}