export interface CoffeType {
  id: number;
  tipo: string[];
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  data: string;
}

export interface CoffesSelected {
  id: number;
  date: string;
  count: number;
}
