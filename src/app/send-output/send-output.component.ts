import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-send-output',
  standalone: true,
  imports: [],
  templateUrl: './send-output.component.html',
  styleUrl: './send-output.component.css'
})
export class SendOutputComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value:string):void{
    alert("emit call !");
    this.newItemEvent.emit(value);
  }
}
