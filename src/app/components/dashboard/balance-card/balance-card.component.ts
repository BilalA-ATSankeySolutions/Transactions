import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { labels } from '../../../utils/json-data';

@Component({
  selector: 'app-balance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss',
})
export class BalanceCardComponent {
  readonly totalBalance      = 80300;
  readonly mainBalance       = 73300;
  readonly creditBalance     = 5000;
  readonly creditSpent       = 3000;
  readonly growthRate        = '3.2';
  readonly creditUsedPercent = 45;

  label = labels;
}
