import { Component } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Component({
  selector: 'add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.scss'],
})
export class AddTransitionComponent {
  connection: any[][];
  line: LeaderLine;
  start: any;
  end: any;
  startindex: any;
  endindex: any;

  constructor() {
    this.connection = [];
  }

  Line() {
    this.line = new LeaderLine(this.start, this.end);
    this.line.startPlug = 'disc';
    this.line.startSocket = 'right';
    this.line.endPlug = 'arrow2';
    this.line.endSocket = 'left';
    this.line.color = 'black';
    this.line.size = 3;
    
    if (this.startindex == this.endindex) {
      this.connection[this.startindex].push(this.line);
    } else {
      this.connection[this.startindex].push(this.line);
      this.connection[this.endindex].push(this.line);
    }

    const lines = document.querySelectorAll('.leader-line');
    const line = lines[lines.length - 1];
    line.addEventListener(
      'contextmenu',
      function (event) {
        if (confirm('Bağlatıyı silmek istediğinize emin misiniz?') == true) {
          line.remove();
        }
        event.preventDefault();
      },
      false
    );
  }
}
