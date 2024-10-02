export interface MockDataType {
  productId: string;
  productName: string;
  price: number;
  boughtDate: string;
}

export interface MockDataResult {
  datas: MockDataType[];
  isEnd: boolean;
}
