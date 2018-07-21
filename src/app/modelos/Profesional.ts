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