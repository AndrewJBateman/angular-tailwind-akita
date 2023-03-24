import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataQuery } from './state/query';
import { DataStore } from './state/store';
import { Data } from './models/data.model';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDialog } from '@angular/material/dialog';

import { DataFormComponent } from './components/data-form/data-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'active'];
  data$ = this.dataQuery.getAllData();

  constructor(
    private dataQuery: DataQuery,
    private dataStore: DataStore,
    private dialog: MatDialog
  ) {}

  toggleChange(event: MatSlideToggleChange, data: Data) {
    this.dataStore.update((state) => {
      const dataCopy: Data = { ...data, isActive: event.checked };
      const stateCopy = structuredClone(state);
      const index = stateCopy.allData.findIndex(
        (data) => data.id === dataCopy.id
      );
      stateCopy.allData[index] = dataCopy;
      const allDataCounter = stateCopy.allData.length;
      const activeDataCounter = stateCopy.allData.filter(
        (data) => data.isActive
      ).length;
      stateCopy.isBtnDisabled =
        allDataCounter === activeDataCounter && allDataCounter < 5
          ? false
          : true;
      return stateCopy;
    });
  }

  addData() {
    this.dialog.open(DataFormComponent, {
      width: '600px',
      hasBackdrop: true,
      disableClose: true,
    });
  }
}
