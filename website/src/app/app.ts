import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Badge } from 'primeng/badge';
import { Avatar } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Button, Menubar, Avatar, Badge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Munar');
  items: MenuItem[] | undefined;
  selected: string | undefined = 'Dashboard';

    constructor(private router: Router) {}

    ngOnInit() {
         this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-desktop',
            },
            {
                label: 'Contracts',
                icon: 'pi pi-briefcase',
            },
            {
                label: 'Investments',
                icon: 'pi pi-money-bill',
            },
            {
                label: 'Admin',
                icon: 'pi pi-check-square',
            },
        ];
    }

    selectionChanged(option: string) {
        this.selected = option;
        this.router.navigate([option.toLowerCase()]);
    }
}
