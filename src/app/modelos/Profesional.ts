import { Ubicacion } from './Ubicacion';

export class Profesional {

    id:number;
    mediaValoraciones:number;
    valoraciones:string[];
    experiencia:string[];
    profesion:string;
    educacion:string[];
    password:string;
    valoracionesHechas:string[];
    ubicacion:Ubicacion;
    apellidos:string;
    avatar:string;
    nombre:string;
    email:string;

    constructor() { }

}

/*
 {
     "id":2,
     "mediaValoraciones":0,
     "valoraciones":null,
     "experiencia":["Experiencia 1","Experiencia 2","Experiencia 3"],
     "profesion":"Entrenador Personal",
     "educacion":["Educación 1"],
     "password":"123456",
     "valoracionesHechas":[],
     "ubicacion":{
         "id":2,
         "longitud":2.1700572967529297,
         "latitud":41.40784461738553
        },
        "apellidos":"Lorem ipsum",
        "avatar":"./imgs/Alexandra-entrenadora-personal.jpg",
        "nombre":"Alexandra",
        "email":"alexandra@workerapp.com"}
*/
