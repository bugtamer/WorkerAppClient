export class Tarea{
    tid:number;
    descripcion:string;
    duracion:number;
    proyecto:number;

    constructor(tid?, descripcion?, duracion?, proyecto?){
        this.tid=tid;
        this.descripcion=descripcion;
        this.duracion=duracion;
        this.proyecto=proyecto;
    }

}