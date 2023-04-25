export type Product = {
  id?: number;
  productName: string;
  productDescript: string;
  productPrice: number;
  ['AddedProducts.count']?: number;
  ['ProductImgs.id']?: number;
  ['ProductImgs.productImgId']?: number;
  ['ProductImgs.productImg']?: string;
};

export type prodImg = {};
export type productId = Product['id'];
