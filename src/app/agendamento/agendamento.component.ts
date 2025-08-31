import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  mostraCadastro: boolean = false;   /* Função para mostrar o formulário de cadastro quando clicar no botão agendar*/ 

  constructor() { }

  ngOnInit(): void {
  }

}

