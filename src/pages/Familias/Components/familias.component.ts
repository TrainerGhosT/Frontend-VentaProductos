import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { RouterLink } from '@angular/router';
import {  IBaseFamilia, IFamilia, ISelectEstados } from '../Data/familia.interface';
import { FamiliaService } from '../Services/familias.service';

@Component({
  standalone: true,
  selector: 'FamiliaComponent',
  imports: [RouterLink, CommonModule],
  templateUrl: './familias.component.html',
  styleUrls: ['./familias.component.css'],
})
export default class FamiliasComponent {
  private familiaService = inject(FamiliaService);
 Familias: IFamilia[] = [];
 Estados: ISelectEstados[] = [];
 BaseFamilias: IBaseFamilia[] = [];

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  this.familiaService.getEstados().subscribe((estados) => {
    this.Estados = estados;
      console.log('Estados cargados (select-estados)', this.Estados);
  })

  this.familiaService.getBaseFamilias().subscribe((baseFamilia) => {
    this.BaseFamilias = baseFamilia
    console.log('BaseFamilias cargados (select-familias)', this.BaseFamilias);
  })

  this.familiaService.getFamilias().subscribe((familias) => {
    this.Familias = familias;
    console.log('Familias cargados', this.Familias);
  })


 }
}
