import { getUsers, } from "./firebase.js"

function orderUsers(users) {
    let aux = 0, mayor = 0
    for (let j = 1; j < users.length; j++) {
        for (let i = 0; i < users.length - 1; i++) {
            if (users[i] > users[i + 1]) {
                aux = users[i];
                users[i] = users[i + 1];
                users[i + 1] = aux;

            }
        }
    }
}

function rateUser(user){
    let points=0
    if(user.p_test1==="true"){
        points++
    }
    if(user.p_test2==="true"){
        points++
    }
    if(user.p_test3==="true"){
        points++
    }
    if(user.p_test4==="true"){
        points++
    }
    if(user.p_test5==="true"){
        points++
    }

    return points
}

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

    if(list_of_users.length!=0){

        let prom1=((correct1 / list_of_users.length) * 100)
        let prom2=((correct2 / list_of_users.length) * 100)
        let prom3=((correct3 / list_of_users.length) * 100)
        let prom4=((correct4 / list_of_users.length) * 100)
        let prom5=((correct5 / list_of_users.length) * 100)

    document.getElementById("p1_prom").textContent = prom1>50?"Correcto con "+ (prom1) +"%": prom1===50?"Correcto/Incorrecto con un 50% cada uno":"Incorrecto con un "+  (100-(prom1)) +"%"
    document.getElementById("p2_prom").textContent = prom2>50?"Correcto con "+ (prom2) +"%": prom2===50?"Correcto/Incorrecto con un 50% cada uno":"Incorrecto con un "+  (100-(prom2)) +"%"
    document.getElementById("p3_prom").textContent = prom3>50?"Correcto con "+ (prom3) +"%": prom3===50?"Correcto/Incorrecto con un 50% cada uno":"Incorrecto con un "+  (100-(prom3)) +"%"
    document.getElementById("p4_prom").textContent = prom4>50?"Correcto con "+ (prom4) +"%": prom4===50?"Correcto/Incorrecto con un 50% cada uno":"Incorrecto con un "+  (100-(prom4)) +"%"
    document.getElementById("p5_prom").textContent = prom5>50?"Correcto con "+ (prom5) +"%": prom5===50?"Correcto/Incorrecto con un 50% cada uno":"Incorrecto con un "+  (100-(prom5)) +"%"
    
    document.getElementById("p1_rc").textContent=correct1
    document.getElementById("p1_ri").textContent=(list_of_users.length-correct1)
    document.getElementById("p2_rc").textContent=correct2
    document.getElementById("p2_ri").textContent=(list_of_users.length-correct2)
    document.getElementById("p3_rc").textContent=correct3
    document.getElementById("p3_ri").textContent=(list_of_users.length-correct3)
    document.getElementById("p4_rc").textContent=correct4
    document.getElementById("p4_ri").textContent=(list_of_users.length-correct4)
    document.getElementById("p5_rc").textContent=correct5
    document.getElementById("p5_ri").textContent=(list_of_users.length-correct5)

    orderUsers(list_of_users)

    for(let i=0;i<list_of_users.length;i++){
    const lista=document.getElementById("users")
    const element= document.createElement("p")

    element.innerText=list_of_users[i].userid+" "+rateUser(list_of_users[i])

    lista.appendChild(element)
    }

    }else{
         Swal.fire({
            title: 'Error!',
            text: 'No existen registros aun',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
})








