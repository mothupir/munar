import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SelectButton } from 'primeng/selectbutton';
import { Select } from 'primeng/select';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-browse',
  imports: [CommonModule, FormsModule, SelectButton, Select, InputGroup, InputGroupAddon, InputText],
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

  contracts: any[] = [1,2,3,4,5,6,7,8,9,0];
}
