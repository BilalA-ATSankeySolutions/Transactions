import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceCardComponent } from '../../components/dashboard/balance-card/balance-card.component';
import { TransactionChartComponent } from '../../components/dashboard/transaction-chart/transaction-chart.component';
import { FinancialGoalsComponent } from '../../components/dashboard/financial-goals/financial-goals.component';
import { AllExpensesComponent } from '../../components/dashboard/all-expense/all-expenses.component';
import { CreditCardComponent } from '../../components/dashboard/credit-card/credit-card.component';
import { DailyLimitComponent } from '../../components/dashboard/daily-limit.component';
import { RecentTransactionsComponent } from '../../components/dashboard/recent-transactions/recent-transactions.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BalanceCardComponent,
    TransactionChartComponent,
    FinancialGoalsComponent,
    AllExpensesComponent,
    CreditCardComponent,
    DailyLimitComponent,
    RecentTransactionsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}