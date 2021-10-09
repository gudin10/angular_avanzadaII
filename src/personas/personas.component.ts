import { Component } from "@angular/core";
import { Persona } from "src/app/persona.model";
import { Articulo } from "src/app/articulo.model";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']

})

export class PersonasComponent{
    title = 'Componente Personas';
    saludo = 'Saludos desde Angular';
    titulo_articulos='Administración articulos';

    nombreInput:string='';
    apellidoInput:string='';

    personas:Persona[]=[new Persona('Franflin','Jimenez'),
      new Persona('Juanita','Huefanita')];

    agregarPersona(){
        let persona1= new Persona(this.nombreInput,this.apellidoInput);

        this.personas.push(persona1);
    }
    mostrar=true;
    sinMostrar=false;

    
}

export class ArticuloComponent{
    titulo_articulos='Administración articulos';

    codigoInput:number=0;
    descripcionInput:string='';
    precioInput:number=0;

    articulos:Articulo[]=[new Articulo(1,'Papas',2500),
      new Articulo(2,'manzanas',500),
      new Articulo(3,'melón',500),
      new Articulo(4,'cebollas',500),
      new Articulo(5,'calabaza',500)];

    agregarArticulo(){
        //let persona1= new Persona(this.nombreInput,this.apellidoInput);

        //this.personas.push(persona1);
    }
    //mostrar=true;
    //sinMostrar=false;
}