import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-deseja-editar-dialog',
  templateUrl: './deseja-editar-dialog.component.html',
  styleUrls: ['./deseja-editar-dialog.component.scss']
})
export class DesejaEditarDialogComponent implements OnInit {

  editar: boolean = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<DesejaEditarDialogComponent>) {}

  ngOnInit(): void {

  }

  editarItem(){
    this.editar = true;
    this.fecharDialog();
  }
  fecharDialog(){
    this.dialogRef.close(this.editar);
  }

}
