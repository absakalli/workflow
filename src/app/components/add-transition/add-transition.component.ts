import { Component } from '@angular/core';
import { StatuService } from 'src/services/statu.service';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.scss'],
})
export class AddTransitionComponent {
  start: any;
  end: any;

  constructor(public service: StatuService) {}

  Line(statu: any) {
    if (!this.start) {
      this.start = statu;
    } else if (!this.end) {
      this.end = statu;
      if (this.end != this.start) {
        this.service.line = new LeaderLine(this.start, this.end);
        this.service.line.startPlug = 'disc';
        this.service.line.endPlug = 'arrow2';
        this.service.line.middleLabel = 'Transition';
        this.service.line.color = 'black';
        this.service.line.size = 3;
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
