import { Component } from '@angular/core';
import { StatuService } from 'src/services/statu.service';

@Component({
  selector: 'add-transition',
  templateUrl: './add-transition.component.html',
  styleUrls: ['./add-transition.component.scss'],
})
export class AddTransitionComponent {
  constructor(public service: StatuService) {}  
}
