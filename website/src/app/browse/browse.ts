import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectButton } from 'primeng/selectbutton';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';
import { ContractCard } from '../components/contract-card/contract-card';
import { Router } from '@angular/router';
import { Details } from "../components/details/details";
import { ScrollPanel } from 'primeng/scrollpanel';

@Component({
  selector: 'app-browse',
  imports: [CommonModule, FormsModule, SelectButton, ContractCard, InputGroup, InputGroupAddon, InputText, Details, ScrollPanel],
  templateUrl: './browse.html',
  styleUrl: './browse.css'
})
export class Browse {
  category: string | undefined = 'Recent';
  categories: string[] = ['Recent', 'Browse', 'Approved'];

  period: string | undefined;
  periods: string[] = ['1 Month', '3 Months', '6 Months', '12 Months'];

  rate: string | undefined;
  rates: string[] = ['0% - 5%', '5% - 10%', '10% - 15%', '15% - 20%', '20%+'];

  contracts: any[] = [1,2,3,4,5,6,7,8,9,2,3,4,5,6,7,8,9];
  selectedContract: any;


  constructor(private router: Router) { }

  viewContract() {
    
  }

  showDetails(contract: any) {
    this.selectedContract = contract;
  }

  closeDetails() {
    this.selectedContract = null;
  }

  investInContract() {
    this.selectedContract = 1;
  }
}
