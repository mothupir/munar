import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-update',
  imports: [Button],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {
  goBack() {
    window.history.back();
  }

  submit() {
    // Submit logic here
    console.log('Form submitted');
  }
}
