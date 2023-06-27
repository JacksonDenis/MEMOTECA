import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id:0,
    conteudo:'',
    autoria:'',
    modelo: ''
  }

  constructor(
    private pensamentoService:PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
        this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
            this.pensamento = pensamento
        })
  }

  editarPensamento() {
    this.pensamentoService.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento () {
    this.router.navigate(['/listarPensamento'])
  }

}
