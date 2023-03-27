import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { DataStore } from '../../state/store';
import { MatDialogRef } from '@angular/material/dialog';
import { Data } from '../../models/data.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataFormComponent implements OnInit {
  public dataForm: FormGroup = new FormGroup('');

  constructor(
    private fb: FormBuilder,
    private dataStore: DataStore,
    private dialogRef: MatDialogRef<DataFormComponent>
  ) {}

  ngOnInit(): void {
    this.dataForm = this.fb.nonNullable.group({
      name: ['', [Validators.required]],
      isActive: [false],
    });
  }

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
        (data: Data) => data.isActive
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
