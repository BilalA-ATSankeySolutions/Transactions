import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { labels } from '../../../utils/json-data';

export interface Transaction {
  vendor:   string;
  iconClass: string; 
  iconBg:   string;
  timeAgo:  string;
  amount:   number;
  type:     'Transfer' | 'Receive';
}

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './recent-transactions.component.html',
  styleUrl: './recent-transactions.component.scss',
})
export class RecentTransactionsComponent {
  transactions: Transaction[] = [
    { vendor: 'Apple',    iconClass: 'pi pi-apple',      iconBg: '#1b1b1b', timeAgo: '1 hours ago',  amount: 369.94, type: 'Transfer' },
    { vendor: 'Figma',    iconClass: 'pi pi-slack',      iconBg: '#1a1a30', timeAgo: '2 hours ago',  amount: 160.94, type: 'Transfer' },
    { vendor: 'Dribbble', iconClass: 'pi pi-stop-circle', iconBg: '#28101c', timeAgo: '3 hours ago',  amount: 200.00, type: 'Receive'  },
    { vendor: 'Google',   iconClass: 'pi pi-globe',      iconBg: '#101828', timeAgo: '4 hours ago',  amount:  36.94, type: 'Receive'  },
  ];

  label = labels
}
