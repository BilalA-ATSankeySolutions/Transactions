import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent }     from '../../components/global/navbar/top-nav.component';
import { SidebarNavComponent } from '../../components/global/sidebar/sidebar-nav.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopNavComponent, SidebarNavComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  // Controls the mobile hamburger dropdown (nav links)
  // menuOpen = signal(false);

  // toggleMenu(): void  { this.menuOpen.update(v => !v); }
  // closeMenu(): void   { this.menuOpen.set(false); }

  // @HostListener('document:keydown.escape')
  // onEsc(): void { this.closeMenu(); }
}