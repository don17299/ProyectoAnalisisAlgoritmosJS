function fill_matrix(matrix) {

    if(matrix.length===6){
        if(matrix[0].length===6){

            for (let i=0;i<matrix.length;i++){
                for(let j=0;j<matrix[i].length;j++){

                    let value=matrix[i][j]
                    const board = document.getElementById('board');
                    const element = document.createElement("div");
                    pasto=(Math.round(Math.random() * (4 - 1) + 1))===1? "grass1":(Math.round(Math.random() * (4 - 1) + 1))===2? "grass2": "grass3"
                   
                    switch (value){
                        case 0: element.className=pasto
                            break;
                        case 1: element.className="link"
                            break;
                        case 2: element.className="wall"
                            break;
                        case 3:element.className=pasto
                                element.innerHTML=`<img src="/images/cofre.png"></img>`
                            break;
                    }
                    board.appendChild(element);
                    
                }
            }
        }
    }
}

let respuestasTest=[]

let ejercicio1= [[0,0,2,0,0,3],
                [0,0,2,0,0,0],
                [0,0,0,0,0,0],
                [0,0,2,2,0,0],
                [0,0,2,0,0,0],
                [1,0,2,0,0,0]];


fill_matrix(ejercicio1)

document.getElementById("up").onclick=function(){
    
}





