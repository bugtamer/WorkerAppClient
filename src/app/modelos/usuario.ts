export class Usuario{
    uid:number;
    name:string;
    email:string;
    pass:string;

    constructor(uid?:number,
        name?:string,
        email?:string,
        pass?:string){
            this.uid=uid;
            this.name=name;
            this.email=email;
            this.pass=pass;
    }
}