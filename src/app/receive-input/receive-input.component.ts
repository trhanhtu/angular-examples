import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receive-input',
  standalone: true,
  imports: [],
  templateUrl: './receive-input.component.html',
  styleUrl: './receive-input.component.css'
})
export class ReceiveInputComponent {
  @Input() item = "";
}
