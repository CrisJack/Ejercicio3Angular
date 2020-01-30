import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import { app_routing } from './app.routes';
//servicios
import { RopasService } from './servicios/ropas.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { RopasComponent } from './components/ropas/ropas.component';
import { AboutComponent } from './components/about/about.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RopasComponent,
    AboutComponent,
    NofoundComponent,
    DetalleComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [
    RopasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
