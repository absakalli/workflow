import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Statu } from 'src/model/statu.model';

@Component({
  selector: 'add-status',
  templateUrl: 'add-status.component.html',
  styleUrls: ['./add-status.component.scss'],
})
export class AddStatusComponent {
  constructor(public dialog: MatDialog) {}

  addStatus(): void {
    const dialogRef = this.dialog.open(StatusDialog, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}

@Component({
  selector: 'add-status-dialog',
  templateUrl: 'status-dialog.html',
})
export class StatusDialog {
  constructor(
    public dialogRef: MatDialogRef<StatusDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Statu
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
