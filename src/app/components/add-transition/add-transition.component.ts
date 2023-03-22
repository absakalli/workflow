import { Component } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.scss'],
})
export class AddTransitionComponent {
  start: any;
  end: any;
  line: any;
  lines: any[];

  constructor() {}

  ngOnInit() {
    this.lines = [];
  }

  Line() {
    if (this.start && this.end && this.start != this.end) {
      this.line = new LeaderLine(this.start, this.end);
      this.line.path = 'grid';
      this.line.startPlug = 'disc';
      this.line.startSocket = 'right';
      this.line.endPlug = 'arrow2';
      this.line.endSocket = 'left';
      this.line.color = 'black';
      this.line.size = 3;
      this.lines.push(this.line);
      console.log(this.lines);
    }
  }
}
