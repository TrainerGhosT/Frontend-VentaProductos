export interface IBaseFamilia {
  idFamilia: number;
}

export interface ISelectFamilias extends IBaseFamilia {
  nombreFamilia: string;
}
export interface ISelectEstados extends IBaseFamilia {
  estado: number;
}

export interface IFamilia extends IBaseFamilia {
  nombreFamilia: string;
  usuarioIngreso: string;
  estado: number;
}
