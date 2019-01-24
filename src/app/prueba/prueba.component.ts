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

  tipo_identificacionCliente: any = "";
  generoCliente: any = "";
  identificacionCliente: any = "";
  apellidosCliente: any = "";
  nombresCliente: any = "";
  profesionCliente: any = "";
  paisNacimientoCliente: any = "";
  ciudadaniaCliente: any = "";
  fechaRegistroCliente: any = "";
  fechaNacimientoCliente: any = "";
  paisResidenciaCliente: any = "";
  provinciaResidenciaCliente: any = "";
  ciudadResidenciaCliente: any = "";
  callePrincipalCliente: any = "";
  numCasaCliente: any = "";
  calleSecundariaCliente: any = "";
  referenciaCliente: any = "";
  numeroCelularCliente: any = "";
  numeroDomicilioCliente: any = "";
  ccedulaReferencia: any = "";
  apellidosReferencia: any = "";
  nombreReferencia: any = "";
  generoReferencia: any = "";
  paisNacimientoReferencia: any = "";
  estadoCivilReferencia: any = "";
  parentescoCliente: any = "";
  apellidoParentesco: any = "";
  nombreParentesco: any = "";
  paisNacimientoParentesco: any = "";
  fechaNacimientoParentesco: any = "";
  actividadEconomicaCliente: any = "";
  ingresosMensualesCliente: any = "";
  egresosMensualesCliente: any = "";
  cargoPoliticoCliente: any = "";
  fechaInicioPoliticoCliente: any = "";
  fechaFinPoliticoCliente: any = "";

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

  IngresoCliente() {
    console.log("iden", this.tipo_identificacionCliente);
    console.log("fecha", this.fechaRegistroCliente);
    this.fechaNacimientoCliente=this.fechaRegistroCliente;
  }

}
