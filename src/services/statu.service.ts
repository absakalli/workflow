import { Injectable } from '@angular/core';
import * as LeaderLine from 'leader-line-new';

@Injectable({
  providedIn: 'root',
})
export class StatuService {
  line: LeaderLine;
  index: any;
  
  constructor() {}
}
