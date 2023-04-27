export type Img = {
  name: string;
  lastModified: bigint;
  lastModifiedDate: any;
  webkitRelativePath: string;
  size: number;
  type: string;
  [key: string]: any;
};

export type Imgs = {
  [key: number]: Img;
};

export type ProdImgs = string[];
