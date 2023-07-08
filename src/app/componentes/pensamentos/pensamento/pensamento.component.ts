import { PensamentoService } from './../pensamento.service';
import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0 ,
    conteudo: 'I love angular',
    autoria: 'Jackson',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento[] = []

  constructor(private pensamentoService:PensamentoService){}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito() : string {
    if(this.pensamento.favorito == false) {
      return 'inativo'
    } return 'ativo'
  }

  atualizarFavoritos() {
    this.pensamentoService.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });
  }

}
