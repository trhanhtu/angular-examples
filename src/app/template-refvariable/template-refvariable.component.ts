import { Component } from '@angular/core';

@Component({
  selector: 'app-template-refvariable',
  standalone: true,
  imports: [],
  templateUrl: './template-refvariable.component.html',
  styleUrl: './template-refvariable.component.css'
})
export class TemplateRefvariableComponent {
  sayName(value:string):void{
    alert(value);
  }
}
