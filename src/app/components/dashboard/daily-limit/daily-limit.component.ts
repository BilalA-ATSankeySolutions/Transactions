import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { labels } from '../../../utils/json-data';

@Component({
  selector: 'app-daily-limit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-limit.component.html',
  styleUrls: ['./daily-limit.component.scss'], 
})
export class DailyLimitComponent {
  readonly spent = 10000;
  readonly limit = 12000;
  readonly pct   = Math.round((this.spent / this.limit) * 100);
  label = labels;
}
