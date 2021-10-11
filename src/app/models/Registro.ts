import { NumberValueAccessor } from "@angular/forms";
export class Registro{
    "Nombre":string;
    "Apellido":string;
    "correo":string;
    "clave":string;
    "telefono": number;
    "regional":string;
    "ciudad":string;
    "direccion":string;
    "idRep":string;
    "esRep":boolean;
    "fechaContr":string;
    "fechaNacio":string;
    "genero":string;
    "clasificacion":string;
    constructor(){
        this.Nombre   ="",
        this.Apellido ="",
        this.correo= "",
        this.clave="",
        this.telefono= 1,
        this.regional="",
        this.ciudad="",
        this.direccion="",
        this.idRep="",
        this.esRep=false,
        this.fechaContr="",
        this.fechaNacio="",
        this.genero="",
        this.clasificacion="Begginer"
    }

}
