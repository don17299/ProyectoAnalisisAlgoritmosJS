/**
 * Hecho por:
 *  Carlos Mario Duque Mejía
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

/** 
 * se verifica que todas las variables de sesion necesarias existan
 */
if (sessionStorage.getItem("userid") === null) {
    location.href = "index.html"
}


/**
 * aqui se toma la variable de sesion del personaje para saber si eligieron a link o a zelda.
 * y se adecua el tutorial y el tablero para el personaje. 
 */
let personaje = sessionStorage.getItem("personaje")

if (personaje == "link") {
    Swal.fire({
        title: 'Encuentra un camino para que link pueda llegar al cofre',
        html: '<img src="./images/tuto1-link.png" style="display:inline-block;width:45%"></img><img src="./images/cruceta-right.png" style="display:inline-block;width:10%"></img><img src="./images/tuto2-link.png" style="display:inline-block;width:45%"></img><h4>Solo tienes un intento por prueba, Suerte!</h4>',
        width: '100%',
    })
} else {
    Swal.fire({
        title: 'Encuentra un camino para que zelda pueda llegar al cofre',
        html: '<img src="./images/tuto1-zelda.png" style="display:inline-block;width:45%"></img><img src="./images/cruceta-right.png" style="display:inline-block;width:10%"></img><img src="./images/tuto2-zelda.png" style="display:inline-block;width:45%"></img><h4>Solo tienes un intento por prueba, Suerte!</h4>',
        width: '100%',
    })
}

/**
 * Se genera el primer ejercicio.
 */
let ejercicio1 =
    [[2, 0, 0, 0, 0, 1],
    [0, 0, 2, 0, 2, 0],
    [0, 0, 0, 0, 0, 0],
    [2, 0, 0, 2, 0, 2],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 3]];

let num_ejercicio = 1

fill_matrix(ejercicio1)

/**
 * Esta funcion rellena el tablero de juego con la matriz especificada
 * Este es el arquetipo para generar un ejercicio:
 * 0:cesped
 * 1:personaje
 * 2:muro o arbusto
 * 3:cofre
 * @param {*} matrix 
 */
function fill_matrix(matrix) {

    if (matrix.length === 6) {
        if (matrix[0].length === 6) {

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {

                    let value = matrix[i][j]
                    const board = document.getElementById("board");
                    const element = document.createElement("div");

                    switch (value) {
                        case 0: element.className = "grass1"
                            element.id = i + "" + j
                            break;
                        case 1: element.className = personaje
                            element.id = i + "" + j
                            break;
                        case 2: element.className = "wall"
                            element.id = i + "" + j
                            break;
                        case 3: element.className = "chest"
                            element.id = i + "" + j
                            break;
                    }
                    board.appendChild(element);

                }
            }
        }
    }
}

/**
 * Esta funcion se encarga de rellenar el tablero para los siguientes 4 ejercicios.
 */
function fill_matrix_another_time() {
    const title = document.getElementById("title");
    const board = document.getElementById("board");

    if (num_ejercicio === 2) {
        title.textContent = "Prueba #2"
        let tam = board.children.length
        let i = 0
        while (i < tam) {
            board.removeChild(board.children[0]);
            i++
        }

        let ejercicio =
            [[0, 0, 2, 0, 0, 0],
            [2, 0, 2, 3, 2, 0],
            [0, 0, 0, 2, 0, 0],
            [2, 0, 2, 0, 0, 2],
            [0, 0, 0, 0, 0, 0],
            [1, 0, 2, 0, 0, 2]];


        fill_matrix(ejercicio)
    } else {
        if (num_ejercicio === 3) {
            title.textContent = "Prueba #3"
            let tam = board.children.length
            let i = 0
            while (i < tam) {
                board.removeChild(board.children[0]);
                i++
            }

            let ejercicio =
                [[0, 0, 0, 0, 0, 0],
                [0, 2, 2, 0, 2, 0],
                [3, 0, 2, 0, 0, 0],
                [2, 2, 0, 2, 0, 0],
                [0, 0, 0, 0, 0, 2],
                [2, 0, 2, 0, 0, 1]];

            fill_matrix(ejercicio)
        } else {
            if (num_ejercicio === 4) {
                title.textContent = "Prueba #4"
                let tam = board.children.length
                let i = 0
                while (i < tam) {
                    board.removeChild(board.children[0]);
                    i++
                }
                let ejercicio =
                    [[2, 0, 2, 0, 0, 0],
                    [0, 0, 0, 0, 2, 0],
                    [3, 2, 0, 2, 2, 0],
                    [2, 0, 2, 0, 0, 0],
                    [0, 0, 2, 0, 2, 2],
                    [2, 0, 0, 0, 0, 1]];


                fill_matrix(ejercicio)

            } else {
                if (num_ejercicio === 5) {
                    title.textContent = "Prueba #5"
                    let tam = board.children.length
                    let i = 0
                    while (i < tam) {
                        board.removeChild(board.children[0]);
                        i++
                    }
                    let ejercicio =
                        [[2, 0, 2, 2, 0, 2],
                        [0, 0, 0, 0, 0, 0],
                        [0, 2, 0, 2, 0, 2],
                        [0, 2, 0, 0, 0, 0],
                        [0, 0, 2, 2, 0, 2],
                        [2, 0, 1, 2, 0, 3]];

                    fill_matrix(ejercicio)
                }
            }
        }
    }
}

/**
 * Este evento permite escribir la flecha hacia arriba en el campo de escritura
 */
document.getElementById("up").onclick = function () {
    /*
    ↑
    ↓
    ←	
    →
    */
    const movements = document.getElementById("move_set");
    const move = document.createElement("p");
    move.innerHTML = `↑`;

    movements.appendChild(move);
}

/**
 * Este evento permite escribir la flecha hacia abajo en el campo de escritura
 */
document.getElementById("down").onclick = function () {
    /*
     ↑
     ↓
     ←	
     →
     */
    const movements = document.getElementById("move_set");
    const move = document.createElement("p");
    move.innerHTML = `↓`;

    movements.appendChild(move);
}

/**
 * Este evento permite escribir la flecha hacia la izquierda en el campo de escritura
 */
document.getElementById("left").onclick = function () {
    /*
     ↑
     ↓
     ←	
     →
     */
    const movements = document.getElementById("move_set");
    const move = document.createElement("p");
    move.innerHTML = `←`;

    movements.appendChild(move);
}

/**
 * Este evento permite escribir la flecha hacia la derecha en el campo de escritura
 */
document.getElementById("right").onclick = function () {
    /*
     ↑
     ↓
     ←	
     →
     */
    const movements = document.getElementById("move_set");
    const move = document.createElement("p");
    move.innerHTML = `→`;

    movements.appendChild(move);
}

/**
 * esta funcion permite ejecutarse el tiempo en milisegundos que se le pase por parametro, se usa para esperar.
 * @param {*} ms milisegundos.
 * @returns 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Esta funcion revisa si la ruta ingresada por el usuario fue correcta y llego al objetivo.
 * @param {*} path lista de <p> con los movimientos ingresados
 * @returns true si llego, false sino. 
 */
async function check_path(path) {
    const link = document.getElementsByClassName(personaje)
    let id = link[0].id
    let i = Number(id.charAt(0))
    let j = Number(id.charAt(1))
    let alive = true
    let crash = false
    let overflowed = false
    let endPos = "n.a"
    for (let k = 0; k < path.length && alive === true; k++) {
        if (path[k].textContent === '↑') {
            if ((i - 1) != -1) {
                if (document.getElementById((i - 1) + "" + j).className != "wall") {
                    if (endPos != "chest") {
                        document.getElementById(i + "" + j).className = "arrowUp"
                    } else {
                        document.getElementById(i + "" + j).className = "chest"
                    }
                    await sleep(700);
                    i--
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = personaje
                    await sleep(700);
                } else {
                    alive = false
                    crash = true
                }
            } else {
                endPos = document.getElementById(i + "" + j).className
                document.getElementById(i + "" + j).className = "arrowUp"
                alive = false
                overflowed = true
            }

        }
        if (path[k].textContent === '←') {
            if ((j - 1) != -1) {
                if (document.getElementById(i + "" + (j - 1)).className != "wall") {
                    if (endPos != "chest") {
                        document.getElementById(i + "" + j).className = "arrowLeft"
                    } else {
                        document.getElementById(i + "" + j).className = "chest"
                    }
                    await sleep(700);
                    j--
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = personaje
                    await sleep(700);
                } else {
                    alive = false
                    crash = true
                }
            } else {
                endPos = document.getElementById(i + "" + j).className
                document.getElementById(i + "" + j).className = "arrowLeft"
                alive = false
                overflowed = true
            }
        }

        if (path[k].textContent === '→') {
            if ((j + 1) != 6) {
                if (document.getElementById(i + "" + (j + 1)).className != "wall") {
                    if (endPos != "chest") {
                        document.getElementById(i + "" + j).className = "arrowRight"
                    } else {
                        document.getElementById(i + "" + j).className = "chest"
                    }
                    await sleep(700);
                    j++
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = personaje
                    await sleep(700);
                } else {
                    alive = false
                    crash = true
                }
            } else {
                endPos = document.getElementById(i + "" + j).className
                document.getElementById(i + "" + j).className = "arrowRight"
                alive = false
                overflowed = true
            }
        }

        if (path[k].textContent === '↓') {
            if ((i + 1) != 6) {
                if (document.getElementById((i + 1) + "" + j).className != "wall") {
                    if (endPos != "chest") {
                        document.getElementById(i + "" + j).className = "arrowDown"
                    } else {
                        document.getElementById(i + "" + j).className = "chest"
                    }
                    await sleep(700);
                    i++
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = personaje
                    await sleep(700);
                } else {
                    alive = false
                    crash = true
                }
            } else {
                endPos = document.getElementById(i + "" + j).className
                document.getElementById(i + "" + j).className = "arrowDown"
                alive = false
                overflowed = true
            }
        }
    }
    if (!alive) {
        if (overflowed) {
            Swal.fire({
                title: 'Error!',
                text: 'Oh no! Te saliste del camino',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
        if (crash) {
            Swal.fire({
                title: 'Error!',
                text: 'Oh no! Te chocaste',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
        return false
    } else {
        if (endPos === "chest") {
            Swal.fire({
                title: 'Genial!',
                text: 'Ahora eres rico',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            return true
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Oh no! No conseguiste el cofre',
                icon: 'info',
                confirmButtonText: 'Ok'
            });
            return false
        }
    }


}

/**
 * Este evento permite al usuario responder, el boton asociado cambiara automaticamente a siguiente
 * Teniendo solo un Intento por ejercicio, al finalizar redirecciona a la encuesta.
 */
document.getElementById("answer").onclick = async function () {
    const myself = document.getElementById("answer")
    if (myself.textContent === "Responder") {
        myself.disabled = true
        const movements = document.getElementById("move_set")
        const moves = movements.children
        let correct = await check_path(moves)
        if (correct) {
            sessionStorage.setItem("p_test" + num_ejercicio, "true")
        } else {
            sessionStorage.setItem("p_test" + num_ejercicio, "false")
        }
        num_ejercicio++
        myself.className = "btn btn-primary"
        myself.disabled = false
        if (num_ejercicio <= 5) {
            myself.textContent = "Siguiente"
        } else {
            myself.textContent = "Continuar"
        }
    } else {
        if (num_ejercicio <= 5) {
            const movements = document.getElementById("move_set")
            let tam = movements.children.length
            let i = 0
            while (i < tam) {
                movements.removeChild(movements.children[0]);
                i++
            }
            myself.className = "btn btn-light"
            myself.textContent = "Responder"
            fill_matrix_another_time()
        } else {
            myself.disabled = true
            await Swal.fire({
                title: 'Resultados finales',
                html: '<h2>Prueba #1:    ' + (sessionStorage.getItem("p_test1") === "true" ? "Correcto" : "Incorrecto") + '</h2><h2>Prueba #2:    ' + (sessionStorage.getItem("p_test2") === "true" ? "Correcto" : "Incorrecto") + '</h2><h2>Prueba #3:    ' + (sessionStorage.getItem("p_test3") === "true" ? "Correcto" : "Incorrecto") + '</h2><h2>Prueba #4:    ' + (sessionStorage.getItem("p_test4") === "true" ? "Correcto" : "Incorrecto") + '</h2><h2>Prueba #5:    ' + (sessionStorage.getItem("p_test5") === "true" ? "Correcto" : "Incorrecto") + '</h2>',
                width: '70%',
            })

            location.href = "survey.html"
        }
    }
}

/**
 * Este boton permite borrar un movimiento de la ruta ingresada.
 */
document.getElementById("back").onclick = function () {
    const movements = document.getElementById("move_set")
    if (movements.children.length > 0) {
        let lastChild = movements.lastChild
        movements.removeChild(lastChild);
    }
}