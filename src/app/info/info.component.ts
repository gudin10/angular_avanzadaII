import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  nom_materia: string='SISTEMAS OPERACIONALES II Tipo: PRÁCTICA Grupo: 1';
  
  edad: number=24;
  
  getEdad ():number{
    return this.edad;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
