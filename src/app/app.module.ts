import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VeiculosModule} from "./veiculos/veiculos.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {HomeModule} from "./home/home.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import { HeaderComponent } from './layout/components/header/header.component';

import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { VendidoPipe } from './pipes/vendido.pipe';
import {InterceptorInterceptor} from "./core/interceptor/interceptor.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    HomeModule,
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true}
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
