import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent {

  constructor(private dialogRef: MatDialogRef<WarningDialogComponent>){

  }

  onClose() {
    this.dialogRef.close("cancel");
  }

  onSubmit() {
    this.dialogRef.close("submit");
  }

}
