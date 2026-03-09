import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

interface NavLink { label: string; active: boolean; }

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent {
  navLinks: NavLink[] = [
    { label: 'Overview', active: true  },
    { label: 'Activity', active: false },
    { label: 'Manage',   active: false },
    { label: 'Card',     active: false },
    { label: 'Account',  active: false },
  ];

  setActive(link: NavLink): void {
    this.navLinks.forEach(l => (l.active = false));
    link.active = true;
  }
}
