import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProducto } from '../Data/product.interface';
import { IBaseFamilia, IFamilia } from '../../Familias/Data/familia.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:5082';
  private http = inject(HttpClient);

  constructor() {}

  getProducts(): Observable<IProducto[]> {
    const productos$ = this.http.get<IProducto[]>(`${this.API_URL}/api/in04`);

    return productos$;
  }
}
