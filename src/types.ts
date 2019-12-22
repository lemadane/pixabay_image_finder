export type MyAction = { 
  type: symbol; 
  payload?: any; 
}

export type MyState = {
  searchText: string;
  loading: boolean;
  amount: number;
  images: any[];
  error: string;
  currentImageURL: string;
  openZoomIn: boolean;
};
