import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Goal {
  name:     string;
  deadline: string;
  savedUp:  number;
  goal:     number;
  progress: number; // 0–100
  color:    string;
}

@Component({
  selector: 'app-financial-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './financial-goals.component.html',
  styleUrl: './financial-goals.component.scss',
})
export class FinancialGoalsComponent {
  goals: Goal[] = [
    { name: 'Buy Car BMW',    deadline: 'Dec 8, 2025',      savedUp:    360,  goal:   2430, progress: 35, color: '#f59e0b' },
    { name: 'Trip to Japan',  deadline: 'August 16, 2026',  savedUp:   3260,  goal:   5800, progress: 85, color: '#00d4b4' },
    { name: 'For a new house',deadline: 'May 12, 2027',     savedUp: 120300,  goal: 250000, progress: 75, color: '#7c5cfc' },
    { name: 'For a new Bike', deadline: 'March 1, 2026',    savedUp:    800,  goal:   3200, progress: 25, color: '#ff6b9d' },
  ];

  /** SVG stroke-dasharray for the ring fill */
  ringDash(progress: number): string {
    const r = 16;
    const circ = 2 * Math.PI * r;
    return `${(progress / 100) * circ} ${circ}`;
  }
}
