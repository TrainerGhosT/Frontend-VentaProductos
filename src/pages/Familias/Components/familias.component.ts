import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'FamiliaComponent',
  imports: [RouterLink],
  templateUrl: './familias.component.html',
})
export default class FamiliasComponent {
  familias = [
    { IdFamilia: 1,  NombreFamilia: 'Electrónica', usuarioIngreso: 'Alan', Estado: 1 },
    { IdFamilia: 2, NombreFamilia: 'Ropa', usuarioIngreso: 'Marco', Estado: 0 },
    // Otros datos...
  ];
}
