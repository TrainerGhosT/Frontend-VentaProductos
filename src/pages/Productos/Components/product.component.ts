import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IProducto } from '../Data/product.interface';
import { IBaseFamilia, IFamilia, ISelectFamilias } from '../../Familias/Data/familia.interface';
import { ProductService } from '../Services/product.service';
import { FamiliaService } from '../../Familias/Services/familias.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export default class ProductComponent {
  private familiaService = inject(FamiliaService);
  private productService = inject(ProductService);

  // datos de productos y familias
  BaseFamilias: ISelectFamilias[] = [];
  productos: IProducto[] = [];
  selectedFamiliaId: number | null = null;

  constructor() {}

  ngOnInit(): void {
    // Cargar las familias desde el servicio
    this.familiaService.getBaseFamilias().subscribe((baseFamilias) => {
      this.BaseFamilias = baseFamilias;
      console.log('Familias cargadas', this.BaseFamilias);
    });

    // Cargar los productos desde el servicio
    this.productService.getProducts().subscribe((productos) => {
      this.productos = productos;
    });
  }
}
