import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import type {
  ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis,
  ApexTooltip, ApexGrid, ApexFill, ApexStroke,
  ApexLegend, ApexDataLabels, ApexMarkers, ApexAnnotations,
} from 'ng-apexcharts';
import { labels } from '../../../utils/json-data';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  fill: ApexFill;
  stroke: ApexStroke;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  annotations: ApexAnnotations;
}

@Component({
  selector: 'app-transaction-chart',
  standalone: true,
  imports: [CommonModule, FormsModule, NgApexchartsModule],
  templateUrl: './transaction-chart.component.html',
  styleUrl: './transaction-chart.component.scss',
})
export class TransactionChartComponent implements OnInit {
  totalLabel = '$54,763.00';
  selectedPeriod = 'This Year';
  periods = ['This Year', 'Last Year', '2023'];

  private earningData = [2000, 5500, 9000, 24235, 18500, 14000, 21000, 17500];
  private spendingData = [1200, 3200, 4500, 6200, 8200, 5400, 7200, 6400];
  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

  chartOptions!: Partial<ChartOptions>;

  label = labels;

  ngOnInit(): void {
    this.buildChart();
  }

  buildChart(): void {
    this.chartOptions = {
      series: [
        { name: 'Earning', data: this.earningData },
        { name: 'Spending', data: this.spendingData },
      ],
      chart: {
        type: 'area',
        height: 195,
        background: 'transparent',
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif',
        animations: {
          // enabled: true,
          dynamicAnimation: {
            enabled: true,
            speed: 700
          }
        },
      },
      colors: ['#7c5cfc', '#00d4b4'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.42,
          opacityTo: 0.02,
          stops: [0, 90, 100],
        },
      },
      stroke: { curve: 'smooth', width: [2.5, 2] },
      dataLabels: { enabled: false },
      markers: { size: 0, hover: { size: 5 } },
      xaxis: {
        categories: this.months,
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: { style: { colors: '#7e8da8', fontSize: '11px' } },
      },
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 30000,
        labels: {
          style: { colors: '#7e8da8', fontSize: '11px' },
          formatter: (v: number) => v >= 1000 ? `${v / 1000}k` : `${v}`,
        },
      },
      grid: {
        borderColor: 'rgba(255,255,255,0.05)',
        strokeDashArray: 4,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
        padding: { left: 0, right: 4, top: -14, bottom: 0 },
      },
      tooltip: {
        theme: 'dark',
        shared: true,
        intersect: false,
        y: {
          formatter: (v: number) =>
            new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v),
        },
      },
      legend: { show: false },
      annotations: {
        points: [{
          x: 'Apr',
          y: 24235,
          marker: {
            size: 6,
            fillColor: '#7c5cfc',
            strokeColor: '#fff',
            strokeWidth: 2,
            // radius: 3,
          },
          label: {
            text: '$24,235',
            borderColor: '#7c5cfc',
            offsetY: -12,
            style: {
              background: '#7c5cfc',
              color: '#fff',
              fontSize: '11px',
              fontWeight: '600',
              padding: { top: 4, bottom: 4, left: 8, right: 8 },
            },
          },
        }],
      },
    };
  }
}
