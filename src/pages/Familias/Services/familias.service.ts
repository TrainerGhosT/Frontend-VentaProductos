import { inject, Injectable } from '@angular/core';
import {
  IBaseFamilia,
  IFamilia,
  ISelectEstados,
  ISelectFamilias,
} from '../Data/familia.interface';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FamiliaService {
  // Por tiempo de desarrollo, se deja el api en el codigo, pero en un futuro se deberia de mover a un archivo de configuracion o de entorno (enviroment)
  private API_URL = 'http://localhost:5082/api/in05';
  private http = inject(HttpClient);

  // Obtener el Id y el nombre de las familais para el select
  getBaseFamilias(): Observable<ISelectFamilias[]> {
    const baseFamilias$ = this.http.get<ISelectFamilias[]>(
      `${this.API_URL}/select-familias`
    );
    return baseFamilias$;
  }
  getEstados(): Observable<ISelectEstados[]> {
    const estados$ = this.http.get<ISelectEstados[]>(
      `${this.API_URL}/select-estados`
    );
    return estados$;
  }

  // Listar las familias (para la tabla)
  getFamilias(): Observable<IFamilia[]> {
    const familias$ = this.http.get<IFamilia[]>(`${this.API_URL}`);
    return familias$;
  }
}
