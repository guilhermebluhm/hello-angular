import { Component, OnInit } from '@angular/core';
import { ModelCursos } from '../model/model-cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  lista_cursos : ModelCursos[] = [
    {
      id: 1,
      descricao: "xbox series x",
      serialNo: "21561547"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
