import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { ThemeService } from '../../../services/theme.service';

interface NavLink { label: string; route: string; }

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TooltipModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  isDark = '';
  menuOpen = signal<boolean>(false);

  constructor(public theme: ThemeService) { }

  navLinks: NavLink[] = [
    { label: 'Overview', route: '/dashboard' },
    { label: 'Activity', route: '/transactions' },
    { label: 'Manage', route: '/analytics' },
    { label: 'Card', route: '/cards' },
    { label: 'Account', route: '/wallet' },
  ];

  toggleTheme() {
    this.theme.toggle();
  }
}