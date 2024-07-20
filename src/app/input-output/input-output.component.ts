import { Component, Input } from '@angular/core';
import { ReceiveInputComponent } from '../receive-input/receive-input.component';
import { SendOutputComponent } from "../send-output/send-output.component";



@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ReceiveInputComponent, SendOutputComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent {
  processData() {

  }

  addItem(otherItem: string) {
    this.items.push(otherItem);
  }
  data: string="";
  currentItem: string = "television";
  items: string[] = ["television", "smart phone", "cocacola"];
}