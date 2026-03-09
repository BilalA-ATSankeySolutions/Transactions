import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import type {
  ApexChart, ApexNonAxisChartSeries,
  ApexPlotOptions, ApexTooltip, ApexLegend,
  ApexDataLabels, ApexStroke,
} from 'ng-apexcharts';
import { labels } from '../../../utils/json-data';

export interface DonutOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
}

export interface ExpenseCat { label: string; color: string; amount: number; }

@Component({
  selector: 'app-all-expenses',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './all-expenses.component.html',
  styleUrl: './all-expenses.component.scss',
})
export class AllExpensesComponent implements OnInit {
  totalLabel = '$320.90';

  categories: ExpenseCat[] = [
    { label: 'Shopping', color: '#7c5cfc', amount: 120 },
    { label: 'Workspace', color: '#ff6b9d', amount: 80 },
    { label: 'Platform', color: '#00d4b4', amount: 60 },
    { label: 'Entertainments', color: '#22c55e', amount: 61 },
  ];

  donut!: Partial<DonutOptions>;

  label = labels

  ngOnInit(): void {
    this.donut = {
      series: this.categories.map(c => c.amount),
      chart: {
        type: 'donut',
        height: 200,
        background: 'transparent',
        toolbar: { show: false },
        animations: {
          // enabled: true,
          dynamicAnimation: {
            enabled: true,
            speed: 700
          }
        },
      },
      labels: this.categories.map(c => c.label),
      colors: this.categories.map(c => c.color),
      plotOptions: {
        pie: {
          donut: {
            size: '68%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                color: '#7e8da8',
                fontSize: '11px',
                fontFamily: 'Inter, sans-serif',
                formatter: () => this.totalLabel,
              },
              value: {
                show: true,
                color: '#e2e8f4',
                fontSize: '16px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
              },
            },
          },
        },
      },
      stroke: { show: false },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: {
        theme: 'dark',
        y: {
          formatter: (v: number) =>
            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v),
        },
      },
    };
  }
}
