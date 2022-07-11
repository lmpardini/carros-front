import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {Veiculo} from "../../../core/interface/veiculo";
import {VeiculoService} from "../../../core/service/veiculo.service";
import {CriarCarroDialogComponent} from "../dialogs/criar-carro-dialog/criar-carro-dialog.component";
import {EditarVeiculoDialogComponent} from "../dialogs/editar-veiculo-dialog/editar-veiculo-dialog.component";

@Component({
  selector: 'app-veiculos-home',
  templateUrl: './veiculos-home.component.html',
  styleUrls: ['./veiculos-home.component.scss']
})
export class VeiculosHomeComponent implements OnInit {

  displayedColumns = ['id', 'marca', 'veiculo', 'ano', 'vendido', 'detalhes'];

  veiculos: Veiculo[] = [];

  pesquisaForm = this.fb.group({
    q: [null, Validators.required]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder,
   private serviceVeiculo: VeiculoService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.serviceVeiculo.read().subscribe(res =>{
      if(res.success == true){
       this.veiculos = res.data; }
      })
  }

  adicionarVeiculo(): void {
    const dialogAddVeiculo = this.dialog.open(CriarCarroDialogComponent, {
      width: '450px',
    });
  }
  pesquisaVeiculo() {

    this.serviceVeiculo.pesquisaVeiculo(this.pesquisaForm.value).subscribe(res => {
      if(res.data.length >= 1){
        this.veiculos = res.data;
      } else {
        console.log('não encontrou')
        //const erroPesquisa = this.dialog.open(ErroBuscaDialogComponent);
      }})
  }

  editarVeiculo(id:any): void {
    const dialogEditarVeiculo = this.dialog.open(EditarVeiculoDialogComponent, {
      width:'700px',
    })
    dialogEditarVeiculo.componentInstance.preencherFormEditar(id);
  }

  limpaPesquisa(){
    window.location.reload();
  }

}
