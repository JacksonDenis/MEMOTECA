import { PensamentoService } from './../pensamento.service';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent  {
  constructor (private pensamentoService:PensamentoService) {}

  pensamento : Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  criarPensamento () {
    this.pensamentoService.criar(this.pensamento).subscribe()
  }

  cancelarPensamento() {
    alert('Cancelado')
  }

}
