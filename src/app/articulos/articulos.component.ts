import { Component, OnInit } from '@angular/core';
import { Articulo } from "src/app/articulo.model";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent{

    titulo_articulos='Administración articulos';
    
    arselect=0;

    codigoInput:number=0;
    descripcionInput:string='';
    precioInput:number=0;
    

    articulos:Articulo[]=[new Articulo(1,'Papas',2500),
      new Articulo(2,'manzanas',1000),
      new Articulo(3,'melón',1500),
      new Articulo(4,'cebollas',2500),
      new Articulo(5,'calabaza',1500)];

    agregarArticulo(){
      let articulo1= new Articulo(this.codigoInput,this.descripcionInput,this.precioInput);

      this.articulos.push(articulo1);
      localStorage.setItem("articulo",JSON.stringify(this.articulos));
      //console.log(localStorage);
    }

    modificarArticulo(){
      
      
      this.articulos[this.arselect].codigo=this.codigoInput;
      this.articulos[this.arselect].descripcion=this.descripcionInput;
      this.articulos[this.arselect].precio=this.precioInput;

      console.log('Modificar esto'+this.arselect+1);
    }

    selectArticulo(index:number,select:boolean){
        console.log('Selected');
        this.arselect=index;
        
        console.log('Articulo = ' + JSON.stringify(this.articulos[index].codigo));
        
        this.codigoInput=index+1;
        this.descripcionInput=this.articulos[index].descripcion;
        this.precioInput=this.articulos[index].precio;

        console.log(index);
        
    }
    
    borrarArticulo(i:number){
      alert('Está seguro de eliminarlo');
      //let articulo1= new Articulo(this.codigoInput,this.descripcionInput,this.precioInput);
      this.articulos.splice(i,1);
      console.log(i);
    //mostrar=true;
    //sinMostrar=false;
}

}




