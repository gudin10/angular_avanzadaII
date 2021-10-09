import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonasComponent } from 'src/personas/personas.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    EstudianteComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    InfoComponent,
    ArticulosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
