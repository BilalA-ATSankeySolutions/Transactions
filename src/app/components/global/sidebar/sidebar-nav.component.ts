import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';

interface SideItem { icon: string; label: string; route: string; }

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TooltipModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss',
})
export class SidebarNavComponent {
  // Desktop floating pill (default)
  @Input() bottomBar = false;  // mobile bottom tab bar mode
  @Input() mobileMenu = false;  // mobile hamburger dropdown mode

  @Output() navClick = new EventEmitter<void>();

  constructor(private router: Router) { }

  items: SideItem[] = [
    { icon: 'pi pi-th-large', label: 'Dashboard', route: '/dashboard' },
    { icon: 'pi pi-credit-card', label: 'Cards', route: '/cards' },
    { icon: 'pi pi-chart-bar', label: 'Analytics', route: '/analytics' },
    { icon: 'pi pi-wallet', label: 'Wallet', route: '/wallet' },
    { icon: 'pi pi-list', label: 'Transactions', route: '/transactions' },
  ];

  showMore = false;

  toggleMore() {
    this.showMore = !this.showMore;
  }

  onNavClick(): void { this.navClick.emit(); }

  logout(): void { this.router.navigate(['/login']); }
}