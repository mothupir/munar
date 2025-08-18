import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectButton } from 'primeng/selectbutton';
import { Select } from 'primeng/select';
import { Card } from 'primeng/card';
import { ContractCard } from "../components/contract-card/contract-card";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, SelectButton, Select, Card, ContractCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  category: string | undefined = 'Recent';
  categories: string[] = ['Recent', 'Browse', 'Approved', 'Partially Funded'];

  period: string | undefined;
  periods: string[] = ['1 Month', '3 Months', '6 Months', '12 Months'];

  rate: string | undefined;
  rates: string[] = ['0% - 5%', '5% - 10%', '10% - 15%', '15% - 20%', '20%+'];

  contracts: any[] = [1,2,3,4,5,6,7,8,9,0];
}
