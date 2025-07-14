export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo{
img: any
  id: number | string
  vehicle: string
  vin: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculoData {
  id: number;
  odometro: number;
  nivelCombustivel: number;
  status: string;
  lat: number;
  long: number
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
