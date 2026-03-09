import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-limit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="limit-card finity-card">
      <h3 class="limit-title">Daily transactions limit</h3>
      <div class="progress-track">
        <div class="progress-fill" [style.width.%]="pct"></div>
      </div>
      <div class="limit-footer">
        <span class="limit-info">
          {{ spent | currency:'USD':'symbol':'1.0-0' }} spent of {{ limit | currency:'USD':'symbol':'1.0-0' }}
        </span>
        <span class="limit-pct">{{ pct }}%</span>
      </div>
    </div>
  `,
  styles: [`
    @use '../../../../styles/constants' as *;

    :host { display: block; }

    .limit-card {
      display: flex;
      flex-direction: column;
      gap: $spacing-sm;
    }

    .limit-title {
      font-size: $font-size-sm;
      font-weight: $font-weight-semi;
      color: var(--text-primary);
    }

    .progress-track {
      height: 6px;
      background: var(--bg-input);
      border-radius: 10px;
      overflow: hidden;

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, $purple-primary, $purple-light);
        border-radius: 10px;
        transition: width $transition-slow;
      }
    }

    .limit-footer {
      display: flex;
      justify-content: space-between;
      .limit-info { font-size: $font-size-xs; color: var(--text-muted); }
      .limit-pct  { font-size: $font-size-xs; font-weight: $font-weight-semi; color: var(--text-secondary); }
    }
  `],
})
export class DailyLimitComponent {
  readonly spent = 10000;
  readonly limit = 12000;
  readonly pct   = Math.round((this.spent / this.limit) * 100);
}
