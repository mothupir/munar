import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-view',
  imports: [Button],
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class View {
  goBack() {
    window.history.back();
  }
}
