import { NumberValueAccessor } from "@angular/forms";
export class Representante{
    K_IDREPRESENTANTE:number;
    N_APELLIDO:string;
    Q_CLASIFICACION:string;                        
    I_GENERO: string;
    F_CONTRATO:Date;
    F_NACIMIENTO:Date;
    N_EMAIL : string;
    N_CONTRASENIA : string;
    N_NOMBRE               : string;
    K_REGIONAL:number;                      
    N_DIRECCION : string;

    constructor(){
        this.K_IDREPRESENTANTE=0;
        this.N_APELLIDO="";
        this.Q_CLASIFICACION="";                        
        this.I_GENERO="";
        this.F_CONTRATO=new Date;
        this.F_NACIMIENTO=new Date;
        this.N_EMAIL ="";
        this.N_CONTRASENIA ="";
        this.N_NOMBRE            ="";
        this.K_REGIONAL=1;                      
        this.N_DIRECCION ="";
    }
}