export interface Sale {
  id: number;
  producto: string;
  vendedor: string;
  cantidad: number;
  total: number;
  fecha: string;
}

export interface FilterParams {
search: string;
vendedor: string;
producto: string;
}