import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

interface Producto {
  codigo: number;
  descripcion: string;
  precio: number;
  saldoInventario: number;
  usuarioIngreso: string;
  familia: number;
  fechaIngreso: Date;
}

interface Familia {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'], // Nota: Asegúrate de que esta propiedad tenga la sintaxis correcta
})
export default class ProductComponent {
  familias: Familia[] = [
    { id: 1, nombre: 'Familia A' },
    { id: 2, nombre: 'Familia B' },
    { id: 3, nombre: 'Familia C' },
  ];
  // datos de productos

  productos: Producto[] = [
    {
      codigo: 1,
      descripcion: 'Producto A',
      precio: 100,
      saldoInventario: 1000,
      usuarioIngreso: 'Juan',
      familia: 1,
      fechaIngreso: new Date('2024-08-06'),
    },
    {
      codigo: 2,
      descripcion: 'Producto B',
      precio: 200,
      saldoInventario: 2000,
      usuarioIngreso: 'Pedro',
      familia: 3,
      fechaIngreso: new Date('2024-08-06'),
    },
    {
      codigo: 3,
      descripcion: 'Producto C',
      precio: 300,
      saldoInventario: 3000,
      usuarioIngreso: 'Luis',
      familia: 3,
      fechaIngreso: new Date('2024-08-06'),
    },
    {
      codigo: 4,
      descripcion: 'Producto D',
      precio: 400,
      saldoInventario: 4000,
      usuarioIngreso: 'Maria',
      familia: 1,
      fechaIngreso: new Date('2024-12-20'),
    },
    {
      codigo: 5,
      descripcion: 'Producto E',
      precio: 500,
      saldoInventario: 5000,
      usuarioIngreso: 'Carlos',
      familia: 2,
      fechaIngreso: new Date('2024-08-06'),
    },
    {
      codigo: 6,
      descripcion: 'Producto F',
      precio: 600,
      saldoInventario: 6000,
      usuarioIngreso: 'Ana',
      familia: 3,
      fechaIngreso: new Date('2024-08-06'),
    },
  ];
}
