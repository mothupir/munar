import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-contract-card',
  imports: [Button],
  templateUrl: './contract-card.html',
  styleUrl: './contract-card.css'
})
export class ContractCard {

  @Input() canInvest!: boolean;
  @Input() canUpdate!: boolean;

  @Output() onView = new EventEmitter();
  @Output() onInvest = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  view() {
    this.onView.emit();
  }

  invest() {
    this.onInvest.emit();
  }

  update() {
    this.onUpdate.emit();
  }

}
