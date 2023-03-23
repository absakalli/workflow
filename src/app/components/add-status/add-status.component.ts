import {
  Component,
  ElementRef,
  Inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Statu } from 'src/model/statu.model';
import { AddTransitionComponent } from '../add-transition/add-transition.component';

@Component({
  selector: 'add-status',
  templateUrl: 'add-status.component.html',
  styleUrls: ['./add-status.component.scss'],
})
export class AddStatusComponent {
  @ViewChildren('statu') _status: QueryList<ElementRef>;
  transition: AddTransitionComponent;
  status: Statu[];
  statu: Statu;
  index: any;
  width: any;
  height: any;
  bgColor: any;
  name: any;
  input: any;
  output: any;

  constructor(public dialog: MatDialog) {
    this.transition = new AddTransitionComponent();
  }

  ngOnInit() {
    this.status = [];
  }

  AddStatu(): void {
    const dialogRef = this.dialog.open(StatusDialog, {
      data: {
        width: this.width,
        height: this.height,
        input: this.input,
        output: this.output,
        bgColor: this.bgColor,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined || null || '') {
        if (
          (result &&
            result.width &&
            result.height &&
            result.input &&
            result.output &&
            result.bgColor) != undefined ||
          null ||
          ''
        ) {
          switch (result.bgColor) {
            case 'acik':
              result.bgColor = '#dfe1e6';
              this.name = 'Açık';
              break;
            case 'progress':
              result.bgColor = '#0052cc';
              this.name = 'Yapılıyor';
              break;
            case 'done':
              result.bgColor = '#00875a';
              this.name = 'Tamamlandı';
              break;
            default:
              break;
          }
          this.statu = new Statu(
            crypto.randomUUID(),
            this.name,
            result.width,
            result.height,
            result.input,
            result.output,
            result.bgColor
          );
          this.status.push(this.statu);
          this.transition.connection.push([this.statu]);
        } else {
          alert('Lütfen zorunlu alanları doldurunuz.');
          return this.AddStatu();
        }
      }
    });
  }

  SelectStatu(i: any) {
    this.index = i;
  }

  SelectConnDot(i: any, event: any) {
    this.index = i;
    if (event.target.className.includes(' out ')) {
      this.transition.startindex = this.index;
      this.transition.start = event.target;
    } else if (
      event.target.className.includes(' in ') &&
      this.transition.start
    ) {
      this.transition.endindex = this.index;
      this.transition.end = event.target;
      this.transition.Line();
      this.transition.start = null;
      this.transition.end = null;
      this.transition.startindex = null;
      this.transition.endindex = null;
    } else {
      alert('Lütfen önce çıkış elementini seçiniz.');
    }
  }

  RemoveStatu() {
    if (this.index != undefined || null || '') {
      for (let i = 1; i < this.transition.connection[this.index].length; i++) {
        const line = this.transition.connection[this.index][i];
        for (let k = 0; k < this.transition.connection.length; k++) {
          for (let j = 1; j < this.transition.connection[k].length; j++) {
            const element = this.transition.connection[k][j];
            if (element == line) {
              this.transition.connection[k][j] = undefined;
            }
          }
        }
        if (line) {
          line.remove();
        }
      }
      this.status.splice(this.index, 1);
      this.transition.connection.splice(this.index, 1);
      this.index = null;
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
    }
  }

  onDragging() {
    if (this.transition.line != undefined || null || '') {
      for (let i = 1; i < this.transition.connection[this.index].length; i++) {
        const element = this.transition.connection[this.index][i];
        if (element) {
          element.position();
        }
      }
    }
  }
}

@Component({
  selector: 'add-status-dialog',
  templateUrl: 'status-dialog.html',
})
export class StatusDialog {
  bgs = [
    { value: 'acik', viewValue: 'Açık' },
    { value: 'progress', viewValue: 'Yapılıyor' },
    { value: 'done', viewValue: 'Tamamlandı' },
  ];

  constructor(
    public dialogRef: MatDialogRef<StatusDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Statu
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
