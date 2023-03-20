import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { Statu } from 'src/model/statu.model';

@Component({
  selector: 'add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.scss'],
})
export class AddTransitionComponent {
  @ViewChildren('statu') _elements: QueryList<ElementRef>;

  statu: Statu;
  status: Statu[];
  start: any;
  end: any;

  ngOnInit() {
    this.status = [];
  }

  AddStatus() {
    this.statu = new Statu(crypto.randomUUID(), 200, 200, '#ff0000');
    this.status.push(this.statu);
  }
}
