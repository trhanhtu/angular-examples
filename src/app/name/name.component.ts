import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [NameComponent],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  @Input() firstName : string = "";
  @Input() lastName: string = "?";
}
