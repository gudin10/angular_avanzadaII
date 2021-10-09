import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Root';
  saludo = 'Saludos desde Angular';
  personas:Persona[]=[new Persona('Franflin','Jimenez'),
  new Persona('Juanita','Huefanita')];
}
