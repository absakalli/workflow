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
import { StatuService } from 'src/services/statu.service';
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
  width: any;
  height: any;
  bgColor: any;
  name: any;
  inDots: any;
  outDots: any;

  constructor(public dialog: MatDialog, public service: StatuService) {
    this.transition = new AddTransitionComponent(service);
  }

  ngOnInit() {
    this.status = [];
  }

  AddStatu(): void {
    const dialogRef = this.dialog.open(StatusDialog, {
      data: {
        width: this.width,
        height: this.height,
        bgColor: this.bgColor,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined || null || '') {
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
          result.bgColor
        );
        this.status.push(this.statu);
      } else {
        return;
      }
    });
  }

  SelectStatu(i: any) {
    this.service.index = i;
    const _status = this._status.toArray();
    this.transition.Line(_status[i].nativeElement);
  }

  onDragging() {
    if (this.service.line != undefined || null || '') {
      this.service.line.position();
    }
  }

  RemoveStatu() {
    if (this.service.index != undefined || null || '') {
      this.status.splice(this.service.index, 1);
      this.service.index = null;
    } else {
      alert('Lütfen düzenlemek istedğiniz elementi seçiniz.');
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
