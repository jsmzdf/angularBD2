import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { LoginComponent } from './login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteService } from './services/cliente.service';
import { RepresentanteService } from './services/representante.service';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    RegisterComponent,
    TiendaComponent,
    ProductoComponent,
    CarritoComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService,
    RepresentanteService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
