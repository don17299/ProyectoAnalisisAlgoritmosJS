/*
 * Hecho por:
 *  Carlos Mario Duque Mejía
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

import { getUsers, } from "./firebase.js"

/**
 * Brinda una calificacion a un usuario basado en sus respuestas al text almacenadas en la BD
 * @param {*} user 
 * @returns 
 */
function rateUser(user) {
    let points = 0
    if (user.p_test1 === "true") {
        points++
    }
    if (user.p_test2 === "true") {
        points++
    }
    if (user.p_test3 === "true") {
        points++
    }
    if (user.p_test4 === "true") {
        points++
    }
    if (user.p_test5 === "true") {
        points++
    }

    return points
}

function orderUsers(users) {
    let aux = 0
    for (let j = 1; j < users.length; j++) {
        for (let i = 0; i < users.length - 1; i++) {
            if (rateUser(users[i]) < rateUser(users[i + 1])) {
                aux = users[i];
                users[i] = users[i + 1];
                users[i + 1] = aux;

            }
        }
    }
}

/**
 * Evento que se ejecuta al cargar el html, este es el que saca la informacion de Firebase y la pinta.
 */
window.addEventListener("DOMContentLoaded", async () => {

    let correct1 = 0, correct2 = 0, correct3 = 0, correct4 = 0, correct5 = 0
    let prom_survey1 = 0, prom_survey2 = 0, prom_survey3 = 0
    let list_of_users = []

    const querySnapchot = await getUsers()

    await querySnapchot.forEach(doc => {
        if (doc.data().p_test1 === "true") {
            correct1++
        }
        if (doc.data().p_test2 === "true") {
            correct2++
        }
        if (doc.data().p_test3 === "true") {
            correct3++
        }
        if (doc.data().p_test4 === "true") {
            correct4++
        }
        if (doc.data().p_test5 === "true") {
            correct5++
        }

        prom_survey1 += Number(doc.data().p_survey1)
        prom_survey2 += Number(doc.data().p_survey2)
        prom_survey3 += Number(doc.data().p_survey3)

        list_of_users.push(doc.data())
    });

    if (list_of_users.length != 0) {

        let prom1 = Math.round(((correct1 / list_of_users.length) * 100))
        let prom2 = Math.round(((correct2 / list_of_users.length) * 100))
        let prom3 = Math.round(((correct3 / list_of_users.length) * 100))
        let prom4 = Math.round(((correct4 / list_of_users.length) * 100))
        let prom5 = Math.round(((correct5 / list_of_users.length) * 100))
        let promS1 = Math.round(prom_survey1 / list_of_users.length)
        let promS2 = Math.round(prom_survey1 / list_of_users.length)
        let promS3 = Math.round(prom_survey1 / list_of_users.length)

        document.getElementById("p1_prom").textContent = prom1 > 50 ? "Correcto con " + (prom1) + "%" : prom1 === 50 ? "Correcto/Incorrecto con un 50%" : "Incorrecto con un " + (100 - (prom1)) + "%"
        document.getElementById("p2_prom").textContent = prom2 > 50 ? "Correcto con " + (prom2) + "%" : prom2 === 50 ? "Correcto/Incorrecto con un 50%" : "Incorrecto con un " + (100 - (prom2)) + "%"
        document.getElementById("p3_prom").textContent = prom3 > 50 ? "Correcto con " + (prom3) + "%" : prom3 === 50 ? "Correcto/Incorrecto con un 50%" : "Incorrecto con un " + (100 - (prom3)) + "%"
        document.getElementById("p4_prom").textContent = prom4 > 50 ? "Correcto con " + (prom4) + "%" : prom4 === 50 ? "Correcto/Incorrecto con un 50%" : "Incorrecto con un " + (100 - (prom4)) + "%"
        document.getElementById("p5_prom").textContent = prom5 > 50 ? "Correcto con " + (prom5) + "%" : prom5 === 50 ? "Correcto/Incorrecto con un 50%" : "Incorrecto con un " + (100 - (prom5)) + "%"

        document.getElementById("p1_rc").textContent = correct1
        document.getElementById("p1_ri").textContent = (list_of_users.length - correct1)
        document.getElementById("p2_rc").textContent = correct2
        document.getElementById("p2_ri").textContent = (list_of_users.length - correct2)
        document.getElementById("p3_rc").textContent = correct3
        document.getElementById("p3_ri").textContent = (list_of_users.length - correct3)
        document.getElementById("p4_rc").textContent = correct4
        document.getElementById("p4_ri").textContent = (list_of_users.length - correct4)
        document.getElementById("p5_rc").textContent = correct5
        document.getElementById("p5_ri").textContent = (list_of_users.length - correct5)

        document.getElementById("s1_prom").textContent = promS1
        document.getElementById("s2_prom").textContent = promS2
        document.getElementById("s3_prom").textContent = promS3

        document.getElementById("t1").textContent = prom1
        document.getElementById("t2").textContent = prom2
        document.getElementById("t3").textContent = prom3
        document.getElementById("t4").textContent = prom4
        document.getElementById("t5").textContent = prom5


        orderUsers(list_of_users)

        const lista = document.getElementById("users")

        document.getElementById("cant").textContent = "Numero de Participantes total: " + list_of_users.length

        for (let i = 0; i < list_of_users.length; i++) {

            lista.appendChild(document.createElement("hr"))
            const element1 = document.createElement("p")
            const element2 = document.createElement("h6")

            element1.innerText = "#" + (i + 1) + " identificación: " + list_of_users[i].userid
            element2.innerText = "calificación: " + rateUser(list_of_users[i])

            lista.appendChild(element1)
            lista.appendChild(element2)

        }

        document.getElementById("ccButton").disabled=false

    } else {
        Swal.fire({
            title: 'Error!',
            text: 'No existen registros aun',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
})

let prueba = 0, encuesta = 0

/**
 * Este metodo verifica las respuesta en los checkButtons del cc.
 */
function checkAnswers() {
    if (document.getElementById("radiot1").checked) {
        prueba = 1
    } else {
        if (document.getElementById("radiot2").checked) {
            prueba = 2
        } else {
            if (document.getElementById("radiot3").checked) {
                prueba = 3
            } else {
                if (document.getElementById("radiot4").checked) {
                    prueba = 4
                } else {
                    if (document.getElementById("radiot5").checked) {
                        prueba = 5
                    }
                }
            }
        }
    }

    if (document.getElementById("radios1").checked) {
        encuesta = 1
    } else {
        if (document.getElementById("radios2").checked) {
            encuesta = 2
        } else {
            if (document.getElementById("radios3").checked) {
                encuesta = 3
            }
        }
    }
}

let list_of_users_global=[]

/**
 * Este evento permite calcular el coeficiente de correlacion con los parametros especificados.
 */
document.getElementById("ccButton").onclick = async () => {
    checkAnswers()
    let xi = 0, xprom = 0, yi = 0, yprom = 0, cc=0
    let coeficienteNumerador = 0, coeficienteDenominadorX = 0, coeficienteDenominadorY = 0

    if (prueba != 0 && encuesta != 0) {

        const querySnapchot = await getUsers()

    await querySnapchot.forEach(doc => {
        list_of_users_global.push(doc.data())
    });

        switch (prueba) {
            case 1: xprom = Number(document.getElementById("t1").textContent) > 50 ? 1 : 0
                break
            case 2: xprom = Number(document.getElementById("t2").textContent) > 50 ? 1 : 0
                break
            case 3: xprom = Number(document.getElementById("t3").textContent) > 50 ? 1 : 0
                break
            case 4: xprom = Number(document.getElementById("t4").textContent) > 50 ? 1 : 0
                break
            case 5: xprom = Number(document.getElementById("t5").textContent) > 50 ? 1 : 0
        }
        switch (encuesta) {
            case 1: yprom = Number(document.getElementById("s1_prom").textContent)
                break
            case 2: yprom = Number(document.getElementById("s2_prom").textContent)
                break
            case 3: yprom = Number(document.getElementById("s3_prom").textContent)
                break
        }

        for (let i = 0; i < list_of_users_global.length; i++) {
            switch (prueba) {
                case 1: xi = list_of_users_global[i].p_test1 === "true" ? 1 : 0
                    break
                case 2: xi = list_of_users_global[i].p_test2 === "true" ? 1 : 0
                    break
                case 3: xi = list_of_users_global[i].p_test3 === "true" ? 1 : 0
                    break
                case 4: xi = list_of_users_global[i].p_test4 === "true" ? 1 : 0
                    break
                case 5: xi = list_of_users_global[i].p_test5 === "true" ? 1 : 0
            }
            switch (encuesta) {
                case 1: yi = list_of_users_global[i].p_survey1
                    break
                case 2: yi = list_of_users_global[i].p_survey2
                    break
                case 3: yi = list_of_users_global[i].p_survey3
                    break
            }

            coeficienteNumerador += (xi - xprom) * (yi - yprom)
            coeficienteDenominadorX += (xi - xprom)**2
            coeficienteDenominadorY +=  (yi - yprom)**2

        }

        cc= coeficienteNumerador/(coeficienteDenominadorX*coeficienteDenominadorY)**(1/2)

        if(isNaN(cc)){
            cc=0
            document.getElementById("message").textContent="no tienen  correlación"
        }else{
            if(cc===0){
                document.getElementById("message").textContent="no tienen  correlación"
            }else{
                if(cc<0){
                    document.getElementById("message").textContent="Correlacion Indirectamente proporcional"
                }else{
                    document.getElementById("message").textContent="Correlacion Directamente proporcional"
                }
            }
        }
        document.getElementById("ccTxt").textContent= cc.toFixed(3)
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Debes seleccionar los elementos a calcular.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }


}

/**
 * Este evento permite salir del juego y volver a empezar si asi se desea.
 */
document.getElementById("exit").onclick = () => {

    sessionStorage.removeItem("userid")
    sessionStorage.removeItem("personaje")
    sessionStorage.removeItem("p_test1")
    sessionStorage.removeItem("p_test2")
    sessionStorage.removeItem("p_test3")
    sessionStorage.removeItem("p_test4")
    sessionStorage.removeItem("p_test5")
    sessionStorage.removeItem("edit_id")
    sessionStorage.removeItem("edit_id")
    sessionStorage.removeItem("saved")

    location.href = "index.html"



}








