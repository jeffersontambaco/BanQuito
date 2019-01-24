import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
//Toda la logica del negocio
export class PruebaComponent implements OnInit {

  tipo_identificacion: any = "";
  genero: any = "";

  tipo_iden: SelectItem[];
  gener: SelectItem[];
  constructor() {
    this.tipo_iden = [
      { label: 'Cédula', value: 'Cédula' },
      { label: 'RUC', value: 'RUC' },

    ];
    this.gener = [
      { label: 'Masculino', value: 'Masculino' },
      { label: 'Femenino', value: 'Femenino' },
      { label: 'Otros', value: 'Otros' },
    ];

  }

  ngOnInit() {
  }

}
