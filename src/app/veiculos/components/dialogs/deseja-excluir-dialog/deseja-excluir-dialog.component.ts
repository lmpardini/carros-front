import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-deseja-excluir-dialog',
  templateUrl: './deseja-excluir-dialog.component.html',
  styleUrls: ['./deseja-excluir-dialog.component.scss']
})
export class DesejaExcluirDialogComponent implements OnInit {

  excluir: boolean = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DesejaExcluirDialogComponent>) {}

  ngOnInit(): void {

  }

  excluirItem(){
    this.excluir = true;
    this.fecharDialog();
  }
  fecharDialog(){
    this.dialogRef.close(this.excluir);
  }

}
