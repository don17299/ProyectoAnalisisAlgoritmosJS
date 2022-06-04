import {saveUser} from "./firebase.js"

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


document.getElementById("button_continue").onclick = function () {
    checkAnswers()

    if (answer1 != 0 && answer2 != 0 && answer3 != 0) {
        Swal.fire({
            title: 'Gracias',
            text: '',
            icon: 'info',
            confirmButtonText: 'Ok'
        });
        // sessionStorage.setItem("p_survey1",answer1)
        // sessionStorage.setItem("p_survey2",answer2)
        // sessionStorage.setItem("p_survey3",answer3)
        let username=sessionStorage.getItem("username")
        let correct_tests=sessionStorage.getItem("correct_tests")
        saveUser(username,correct_tests,answer1,answer2,answer3)
        //location.href = "index.html"
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Debes responder a todas las preguntas.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}






