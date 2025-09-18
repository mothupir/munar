import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-add',
  imports: [Button],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
  goBack() {
    window.history.back();
  }

  submit() {
    // Submit logic here
    console.log('Form submitted');
  }
}
