import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {
  displayedColumns: string[] = ['tipoCorte', 'valor'];
  dataSource = SERVICOS;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface Servicos {
  tipoCorte: string;
  valor: string;
}

const SERVICOS: Servicos[] = [
  {tipoCorte: "Buzz Cut", valor: "R$00,00"}, 
  {tipoCorte: "Fade/Degradê", valor: "R$00,00"},
  {tipoCorte: "Mullet Moderno", valor: "R$00,00"},
  {tipoCorte: "Old Money", valor: "R$00,00"},

]
