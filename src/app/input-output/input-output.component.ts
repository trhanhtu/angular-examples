import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    this.returnData.emit(this.data.toUpperCase());
  }

  addItem(otherItem: string) {
    this.items.push(otherItem);
  }
  @Input() data: string="";
  @Output() returnData = new EventEmitter<string>();
  currentItem: string = "television";
  items: string[] = ["television", "smart phone", "cocacola"];
}