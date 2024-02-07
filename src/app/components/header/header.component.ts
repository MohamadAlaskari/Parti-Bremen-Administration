import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems: any[] = [
    { icon: 'home', label: 'dashboard', route: '/dashboard' },
    { icon: 'login', label: 'login', route: '/login' },
    { icon: 'how_to_reg', label: 'register', route: '/register' },
    { icon: 'settings', label: 'settings', route: '/settings' },
  ];
}
