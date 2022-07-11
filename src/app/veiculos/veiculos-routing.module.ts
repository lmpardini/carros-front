import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VeiculosHomeComponent} from "./components/veiculos-home/veiculos-home.component";

const routes: Routes = [
  {path: '', component:VeiculosHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
