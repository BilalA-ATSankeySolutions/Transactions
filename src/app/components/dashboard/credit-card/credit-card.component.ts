import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { labels } from '../../../utils/json-data';

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss',
})
export class CreditCardComponent {
  card = {
    number: '1253 5432 3521 3090',
    holder: 'Sepide Moqadasi',
    isPremium: true,
  };
  
  label = labels
}
