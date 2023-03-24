import { Store, StoreConfig } from '@datorama/akita';
import { Data } from '../models/data.model';
import { Injectable } from '@angular/core';

export interface DataState {
  allData: Data[];
  isBtnDisabled: boolean;
}

const allData: Data[] = [
  {
    id: 1,
    name: 'Robot1',
    isActive: true,
  },
  {
    id: 2,
    name: 'Robot2',
    isActive: true,
  },
  {
    id: 3,
    name: 'Robot3',
    isActive: false,
  },
];

export const createInitialState = (): DataState => {
  const allDataCounter = allData.length;
  const activeDataCounter = allData.filter((data) => data.isActive).length;
  return {
    allData: allData,
    isBtnDisabled:
      allDataCounter === activeDataCounter && allDataCounter < 4 ? false : true,
  };
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'data' })
export class DataStore extends Store<DataState> {
  constructor() {
    super(createInitialState());
  }
}
