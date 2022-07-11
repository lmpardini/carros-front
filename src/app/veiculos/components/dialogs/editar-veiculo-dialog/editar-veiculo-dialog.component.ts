import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {VeiculoService} from "../../../../core/service/veiculo.service";
import {DesejaEditarDialogComponent} from "../deseja-editar-dialog/deseja-editar-dialog.component";
import {DesejaExcluirDialogComponent} from "../deseja-excluir-dialog/deseja-excluir-dialog.component";

@Component({
  selector: 'app-editar-veiculo-dialog',
  templateUrl: './editar-veiculo-dialog.component.html',
  styleUrls: ['./editar-veiculo-dialog.component.scss']
})
export class EditarVeiculoDialogComponent implements OnInit {

  constructor(
    public dialogEditar: MatDialogRef<EditarVeiculoDialogComponent>,
    private fb: FormBuilder,
    private veiculoService: VeiculoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  editarVeiculo = this.fb.group({
    id:[null],
    veiculo: [null, Validators.required],
    marca: [null, Validators.required],
    ano:  [null, Validators.required],
    descricao: [null],
    vendido: [null],

  });

  preencherFormEditar(id:string){
    this.veiculoService.pesquisarPorId(id).subscribe(res =>{
      this.editarVeiculo.patchValue(res.data);
    })
  }

  fecharModal(): void {
    this.dialogEditar.close();
    window.location.reload();
  }

  editVeiculo(id:any){

    const dialogConfirmEditar = this.dialog.open(DesejaEditarDialogComponent);

    dialogConfirmEditar.afterClosed().subscribe(edit => {
      if (edit == true) {
        this.veiculoService.atualizarVeiculo(this.editarVeiculo.value, id).subscribe(() =>{
          this.veiculoService.showMessage('Veiculo alterado com sucesso');
          this.fecharModal();
        })}})
  }

  excluirVeiculo(id:any) :void {

   const dialogConfirmExcluir = this.dialog.open(DesejaExcluirDialogComponent);

    dialogConfirmExcluir.afterClosed().subscribe(resp => {
      if(resp == true){
        this.veiculoService.excluirVeiculo(id).subscribe(exc =>{
          this.veiculoService.showMessage('Veiculo excluido com sucesso');
          this.fecharModal();
        })}})
  }
}
