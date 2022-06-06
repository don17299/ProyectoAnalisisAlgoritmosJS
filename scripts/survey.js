import {saveUser, updateUser} from "./firebase.js"

let answer1 = 0, answer2 = 0, answer3 = 0

function checkAnswers() {
    if (document.getElementById("radio11").checked) {
        answer1 = 1
    } else {
        if (document.getElementById("radio12").checked) {
            answer1 = 2
        } else {
            if (document.getElementById("radio13").checked) {
                answer1 = 3
            } else {
                if (document.getElementById("radio14").checked) {
                    answer1 = 4
                } else {
                    if (document.getElementById("radio15").checked) {
                        answer1 = 5
                    }
                }
            }
        }
    }

    if (document.getElementById("radio21").checked) {
        answer2 = 1
    } else {
        if (document.getElementById("radio22").checked) {
            answer2 = 2
        } else {
            if (document.getElementById("radio23").checked) {
                answer2 = 3
            } else {
                if (document.getElementById("radio24").checked) {
                    answer2 = 4
                } else {
                    if (document.getElementById("radio25").checked) {
                        answer2 = 5
                    }
                }
            }
        }
    }

    if (document.getElementById("radio31").checked) {
        answer3 = 1
    } else {
        if (document.getElementById("radio32").checked) {
            answer3 = 2
        } else {
            if (document.getElementById("radio33").checked) {
                answer3 = 3
            } else {
                if (document.getElementById("radio34").checked) {
                    answer3 = 4
                } else {
                    if (document.getElementById("radio35").checked) {
                        answer3 = 5
                    }
                }
            }
        }
    }
}


document.getElementById("button_continue").onclick = async function () {
    checkAnswers()

    if (answer1 != 0 && answer2 != 0 && answer3 != 0) {

        let userid=sessionStorage.getItem("userid")
        let p_test1=sessionStorage.getItem("p_test1")
        let p_test2=sessionStorage.getItem("p_test2")
        let p_test3=sessionStorage.getItem("p_test3")
        let p_test4=sessionStorage.getItem("p_test4")
        let p_test5=sessionStorage.getItem("p_test5")
        let edit_id=sessionStorage.getItem("edit_id")

        let user={
            userid:userid,
            p_test1:p_test1,
            p_test2:p_test2,
            p_test3:p_test3,
            p_test4:p_test4,
            p_test5:p_test5,
            p_survey1:answer1,
            p_survey2:answer2,
            p_survey3:answer3
        }
        
        
        if(edit_id==="n.a"){
            saveUser(user)
        }else{
        await updateUser(edit_id,user)
        }

        await Swal.fire({
            title: 'Gracias',
            text: '',
            icon: 'info',
            confirmButtonText: 'Ok'
        });

        
        location.href="reports.html"
    } else {
        await Swal.fire({
            title: 'Error!',
            text: 'Debes responder a todas las preguntas.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });

        
    }
}






