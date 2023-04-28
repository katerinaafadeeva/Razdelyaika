export type Product = {
  id: number;
  productName: string;
  productDescript: string;
  productPrice: number;
  [key: string]: any;
  ['AddedProducts.count']?: number;
  ['ProductImgs.id']?: number;
  ['ProductImgs.productImgId']?: number;
  ['ProductImgs.productImg']?: string;
  ['ProductSizes.Size.sizeText']?: string[];
};

export type prodImg = {};
export type productId = Product['id'];
