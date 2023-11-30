export class CReceta{
    nombre: string="";
    ingredientes: string[]=[];
    preparacion: string="";
    rutaimagen: string ="";

    constructor(nombre: string, ingredientes:string[], preparacion:string, rutaimagen:string){
        this.nombre=nombre;
        this.ingredientes=ingredientes;
        this.preparacion=preparacion;
        this.rutaimagen=this.rutaimagen;
    }

}