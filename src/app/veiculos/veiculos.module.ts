import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosHomeComponent } from './components/veiculos-home/veiculos-home.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {ReactiveFormsModule} from "@angular/forms";
import {VeiculoService} from "../core/service/veiculo.service";
import {HttpClient} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { CriarCarroDialogComponent } from './components/dialogs/criar-carro-dialog/criar-carro-dialog.component';
import { EditarVeiculoDialogComponent } from './components/dialogs/editar-veiculo-dialog/editar-veiculo-dialog.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { DesejaEditarDialogComponent } from './components/dialogs/deseja-editar-dialog/deseja-editar-dialog.component';
import { DesejaExcluirDialogComponent } from './components/dialogs/deseja-excluir-dialog/deseja-excluir-dialog.component';
import {AppModule} from "../app.module";
import {VendidoPipe} from "../pipes/vendido.pipe";


@NgModule({
  declarations: [
    VeiculosHomeComponent,
    CriarCarroDialogComponent,
    EditarVeiculoDialogComponent,
    DesejaEditarDialogComponent,
    DesejaExcluirDialogComponent,
    VendidoPipe
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSlideToggleModule,
  ], providers: [HttpClient]
})
export class VeiculosModule { }
