import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-details',
  imports: [Button],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  @Output() onClose = new EventEmitter();
  @Output() onInvest = new EventEmitter();

  close() {
    this.onClose.emit();
  }

  invest() {
    this.onInvest.emit();
  }
}
