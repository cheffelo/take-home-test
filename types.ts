export interface Product {
  productId: string;
  productName: string;
  productImage: string;
  originCountry: string;
  stock: number;
  supplier: string;
}

export interface APIError {
  status: number;
  message: string;
}
