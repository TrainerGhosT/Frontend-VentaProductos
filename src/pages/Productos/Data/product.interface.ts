import { IBaseFamilia, IFamilia } from "../../Familias/Data/familia.interface";

export interface IProducto {
    idProducto: number;
    codigoProducto: string;
    descripcion: string;
    precio: number;
    saldoInventario: number;
    usuarioIngreso: string;
    fechaIngreso: Date;
    familia: string | IBaseFamilia;
  }