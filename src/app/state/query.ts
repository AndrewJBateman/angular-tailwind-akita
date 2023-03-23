import { Query } from '@datorama/akita';
import { DataState, DataStore } from './store';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataViewModel } from '../data-view.model';

@Injectable({
  providedIn: 'root',
})
export class DataQuery extends Query<DataState> {
  constructor(private dataStore: DataStore) {
    super(dataStore);
  }

  getAllData(): Observable<DataViewModel> {
    return this.select([
      (state) => state.allData,
      (state) => state.isBtnDisabled,
    ]).pipe(
      map(([allData, isBtnDisabled]) => {
        return {
          allData,
          isBtnDisabled,
        };
      })
    );
  }
}
