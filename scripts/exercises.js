/**
 * Hecho por:
 *  Carlos Mario Duque Mejia
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

// if(typeof (sessionStorage.getItem("username"))==='undefined'){
//     Swal.fire({
//         title: 'Error!',
//         text: 'Oh no! no te logueaste',
//         icon: 'info',
//         confirmButtonText: 'Ok'
//     });
//     location.href = "index.html"
// }

/**
 * 0:cesped
 * 1:link
 * 2:muro
 * 3:cofre
 */
let ejercicio1 =
    [[0, 0, 2, 0, 0, 3],
    [0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0],
    [0, 0, 2, 0, 0, 0],
    [1, 0, 2, 0, 0, 0]];

let num_ejercicio = 1
let ejercicios_correctos=0

fill_matrix(ejercicio1)

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
                        case 1: element.className = "link"
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

function fill_matrix_another_time() {
    if (num_ejercicio === 2) {
        const board = document.getElementById("board");
        let tam = board.children.length
        let i = 0
        while (i < tam) {
            board.removeChild(board.children[0]);
            i++
        }

        let ejercicio =
            [[0, 0, 2, 0, 2, 0],
            [0, 0, 2, 1, 2, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 2],
            [0, 0, 2, 0, 0, 3]];

        fill_matrix(ejercicio)
    } else {
        if (num_ejercicio === 3) {
            const board = document.getElementById("board");
            let tam = board.children.length
            let i = 0
            while (i < tam) {
                board.removeChild(board.children[0]);
                i++
            }
            let ejercicio =
                [[0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 3, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2],
                [0, 0, 0, 0, 0, 1]];

            fill_matrix(ejercicio)
        } else {
            if (num_ejercicio === 4) {
                const board = document.getElementById("board");
                let tam = board.children.length
                let i = 0
                while (i < tam) {
                    board.removeChild(board.children[0]);
                    i++
                }
                let ejercicio =
                    [[2, 0, 0, 0, 0, 2],
                    [2, 0, 2, 2, 0, 2],
                    [2, 0, 2, 2, 0, 2],
                    [2, 0, 2, 2, 0, 2],
                    [2, 0, 2, 2, 0, 2],
                    [2, 1, 2, 2, 3, 2]];

                fill_matrix(ejercicio)
            } else {
                if (num_ejercicio === 5) {
                    const board = document.getElementById("board");
                    let tam = board.children.length
                    let i = 0
                    while (i < tam) {
                        board.removeChild(board.children[0]);
                        i++
                    }
                    let ejercicio =
                        [[0, 0, 2, 0, 0, 0],
                        [0, 0, 0, 2, 0, 0],
                        [0, 0, 3, 2, 0, 0],
                        [0, 2, 2, 1, 0, 0],
                        [0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0]];

                    fill_matrix(ejercicio)
                }
            }
        }
    }

}

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 
 * @param {*} path lista de <p> con los movimientos ingresados
 * @returns 
 */
async function check_path(path) {
    const link = document.getElementsByClassName("link")
    let id = link[0].id
    let i = Number(id.charAt(0))
    let j = Number(id.charAt(1))
    let alive = true
    let crash = false
    let overflowed = false
    let endPos
    for (let k = 0; k < path.length && alive === true; k++) {
        if (path[k].textContent === '↑') {
            if ((i - 1) != -1) {
                if (document.getElementById((i - 1) + "" + j).className != "wall") {
                    document.getElementById(i + "" + j).className = "arrowUp"
                    await sleep(800);
                    i--
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = "link"
                    await sleep(800);
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
                    document.getElementById(i + "" + j).className = "arrowLeft"
                    await sleep(800);
                    j--
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = "link"
                    await sleep(800);
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
                    console.log(i, j)
                    document.getElementById(i + "" + j).className = "arrowRight"
                    await sleep(800);
                    j++
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = "link"
                    await sleep(800);
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
                    document.getElementById(i + "" + j).className = "arrowDown"
                    await sleep(800);
                    i++
                    endPos = document.getElementById(i + "" + j).className
                    document.getElementById(i + "" + j).className = "link"
                    await sleep(800);
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
                icon: 'info',
                confirmButtonText: 'Ok'
            });
            return true
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Oh no! no conseguiste el cofre',
                icon: 'info',
                confirmButtonText: 'Ok'
            });
            return false
        }
    }


}

document.getElementById("answer").onclick = function () {
    const myself = document.getElementById("answer")
    if (myself.textContent === "Responder") {
        const movements = document.getElementById("move_set")
        const moves = movements.children
        if (check_path(moves)) {
            ejercicios_correctos++
        }
        num_ejercicio++
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
            myself.textContent = "Responder"
            fill_matrix_another_time()
        } else {
            sessionStorage.setItem("num_correct",""+ejercicios_correctos)
            location.href = "exercises.html"
        }
    }
}

document.getElementById("back").onclick = function () {
    const movements = document.getElementById("move_set")
    if(movements.children.length>0){    
    let lastChild = movements.lastChild
    movements.removeChild(lastChild);
    }
}