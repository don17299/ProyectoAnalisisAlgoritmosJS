/**
 * Hecho por:
 *  Carlos Mario Duque Mejia
 *  Claudia Patricia Ordoñez
 *  Sebastian Lugo Mateus
 */

export class User{

    constructor(nickname){
        this.nickname=nickname
        let respuestasTest=[]
        let respuestasEncuesta=[]
    }

    appendAnswerTest(respuesta){
        respuestasTest.append(respuesta)
    }

    appendAnswerSurvey(respuesta){
        respuestasEncuesta.append(respuesta)
    }
}

export class Exercises{

    initializeMatrix(matrix){

    }

    showMessage(message, cssClass){
        const div= document.createElement('div');
        div.className= `alert alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        //showing
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },4000);
    }
    
}