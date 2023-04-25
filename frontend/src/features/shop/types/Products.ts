export type Product = {
  productName: string;
  productDescript: string;
  productPrice: number;
  [key: string]: any;
  ['ProductImgs.id']: number;
  ['ProductImgs.productImgId']: number;
  ['ProductImgs.productImg']: string;
};

export type prodImg = {};
export type productId = Product['id'];
