import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { AuthService } from '../../../services/auth.service';

interface SideItem { icon: string; label: string; active: boolean; route?: string; }

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule, TooltipModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss',
})
export class SidebarNavComponent {
  items: SideItem[] = [
    { icon: 'pi pi-th-large', label: 'Dashboard', active: true, route: '/dashboard' },
    { icon: 'pi pi-credit-card', label: 'Cards', active: true, route: '/cards' },
    { icon: 'pi pi-chart-bar', label: 'Analytics', active: true, route: '/analytics' },
    { icon: 'pi pi-wallet', label: 'Wallet', active: true, route: '/wallet' },
    { icon: 'pi pi-list', label: 'Transactions', active: true, route: '/transactions' },
  ];

  constructor(private auth: AuthService, private common: CommonService) { }

  setActive(item: SideItem): void {
    this.items.forEach(i => (i.active = false));
    item.active = true;
  }

  logout() {
    this.common.confirm(
      'Are you sure you want to logout?',
      () => {
        this.auth.logout(false);
      },
      'Logout'
    );
  }
}
