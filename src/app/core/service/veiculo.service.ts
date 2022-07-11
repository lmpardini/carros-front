import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Veiculo} from "../interface/veiculo";

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  private urlVeiculo = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    ) { }

  showMessage(msg: string): void{

    this.snackBar.open(msg, '', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(veiculo: Veiculo): Observable<any>{
    const url = `${this.urlVeiculo}veiculos/`
    return this.http.post<Veiculo>(url, veiculo)

  }

  read(): Observable<any>{
    const url = `${this.urlVeiculo}veiculos/`
    return this.http.get<Veiculo[]>(url)

  }

  pesquisarPorId(id:string): Observable<any>{
    const url = `${this.urlVeiculo}veiculos/${id}`
    return this.http.get<Veiculo>(url);
  }

  pesquisaVeiculo(pesquisa:any): Observable<any>{
    const url = `${this.urlVeiculo}veiculos/find?q=${pesquisa.q}`
    return this.http.get<Veiculo>(url);
  }

  atualizarVeiculo(veiculo:Veiculo, id:any): Observable<any>{
    const url = `${this.urlVeiculo}veiculos/${id}`
    console.log(url);
    return this.http.put<Veiculo>(url,veiculo);
  }

  excluirVeiculo(id:any):Observable<any> {
    const url = `${this.urlVeiculo}veiculos/${id}`
    return this.http.delete(url);
  }
}
