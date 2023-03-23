import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { DataStore } from '../../state/store';
import { MatDialogRef as MatDialogRef } from '@angular/material/dialog';
import { Data } from '../../data.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataFormComponent {
  dataForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    isActive: [false],
  });

  constructor(
    private fb: FormBuilder,
    private dataStore: DataStore,
    private dialogRef: MatDialogRef<DataFormComponent>
  ) {}

  submit() {
    if (this.dataForm.invalid) {
      this.dataForm.markAllAsTouched();
      return;
    }
    this.dataStore.update((state) => {
      const stateCopy = structuredClone(state);
      const newData: Data = {
        id: stateCopy.allData.length + 1,
        name: this.dataForm.getRawValue().name,
        isActive: this.dataForm.getRawValue().isActive,
      };
      stateCopy.allData.push(newData);
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
    this.dialogRef.close();
  }
}
