import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgFor, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen: boolean = false;
  navItems: any[] = [
    { icon: 'home', label: 'dashboard', route: '/dashboard' },
    { icon: 'login', label: 'login', route: '/login' },
    { icon: 'how_to_reg', label: 'register', route: '/register' },
    { icon: 'settings', label: 'settings', route: '/settings' },
  ];

  constructor(private router: Router) {}

  toggleSidebar() {
    console.log('toggleSidebar called, isOpen before:', this.isOpen);
    this.isOpen = !this.isOpen;
    console.log('isOpen after:', this.isOpen);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
