import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {
  FormBuilder,
  Validators
} from "@angular/forms";
import {VeiculoService} from "../../../../core/service/veiculo.service";
import {Veiculo} from "../../../../core/interface/veiculo";

@Component({
  selector: 'app-criar-carro-dialog',
  templateUrl: './criar-carro-dialog.component.html',
  styleUrls: ['./criar-carro-dialog.component.scss']
})
export class CriarCarroDialogComponent implements OnInit {

  veiculo: Veiculo = {
    veiculo:'',
    marca: '',
    ano: 0,
    descricao: ''
  }

  cadastroVeiculos = this.fb.group({
    veiculo: [null, Validators.required,],
    marca: [null, Validators.required],
    ano: [null, Validators.required],
    descricao: [null],
  });

  constructor(
    public dialogRef: MatDialogRef<CriarCarroDialogComponent>,
    private fb: FormBuilder,
    private service: VeiculoService,
  ) { }

  ngOnInit(): void {
  }

  fecharModal(): void {
    this.dialogRef.close();
    window.location.reload();
  }

  cadastrarVeiculo():void{
    this.service.create(this.cadastroVeiculos.value).subscribe(res =>{
      if (res.success === true) {
        this.service.showMessage(res.data)
        this.fecharModal()
      }else {
        this.service.showMessage(res.data)
      }
    })
  }

}
