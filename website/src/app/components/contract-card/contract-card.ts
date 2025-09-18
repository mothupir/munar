import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-contract-card',
  imports: [Button],
  templateUrl: './contract-card.html',
  styleUrl: './contract-card.css'
})
export class ContractCard {

  @Output() onView = new EventEmitter();
  @Output() onInvest = new EventEmitter();

  view() {
    this.onView.emit();
  }

  invest() {
    this.onInvest.emit();
  }

}
