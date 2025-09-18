import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { RadioButton } from 'primeng/radiobutton';
import { ContractCard } from '../../components/contract-card/contract-card';

@Component({
  selector: 'app-all',
  imports: [CommonModule, FormsModule, Button, RadioButton, ContractCard],
  templateUrl: './all.html',
  styleUrl: './all.css'
})
export class All {
  contracts: any[] = [1,2,3,4];
  contractType: string | undefined = 'Browse';
  contractTypes: string[] = ['Browse', 'Approved', 'Pending', 'Rejected'];

  constructor(private router: Router) {}

  addContract() {
    this.router.navigate(['/contracts/add']);
  }

  viewContract() {
    this.router.navigate(['/contracts/view'])
  }

  investInContract() {
    this.router.navigate(['/contracts/update'])
  }

  typeClicked(event: any) {
    console.log(event);
  }
}
