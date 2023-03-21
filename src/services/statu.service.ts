import { ElementRef, Injectable, ViewChildren } from '@angular/core';
import * as LeaderLine from 'leader-line-new';
import { Statu } from 'src/model/statu.model';

@Injectable({
  providedIn: 'root',
})
export class StatuService {
  line: LeaderLine;
  index: any;
  start: any;
  end: any;

  constructor() {}

  Line(statu: any) {
    if (!this.start) {
      this.start = statu;
    } else if (!this.end) {
      this.end = statu;
      if (this.end != this.start) {
        this.line = new LeaderLine(this.start, this.end);
        this.line.startPlug = 'disc';
        this.line.endPlug = 'arrow2';
        this.line.middleLabel = 'Transition';
        this.line.color = 'black';
        this.line.size = 3;
      } else {
        this.start = '';
        this.end = '';
        return;
      }
    } else {
      return;
    }
  }
}
