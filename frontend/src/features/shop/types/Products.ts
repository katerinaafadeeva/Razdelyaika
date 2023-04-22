export type Product = {
  id: number;
  productName: string;
  productDescript: string;
  productPrice: number;
  [key: string]: any;
};

export type productId = Product['id'];
