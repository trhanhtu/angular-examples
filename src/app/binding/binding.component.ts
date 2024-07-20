import { Component } from '@angular/core';
import { StringInterpolationComponent } from "../string-interpolation/string-interpolation.component";
import { NameComponent } from "../name/name.component";
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule, StringInterpolationComponent, NameComponent, NgClass, NgStyle],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {


  handleWheelInBinding_ts(event: WheelEvent) {
    event.preventDefault();
    alert("mouse wheel detected" + event);

  }
  increaseAge(): void {
    this.age += 99;
  }
  age2: number = -777;
  age: number = -100;
  parentMessage: string = "những đứa giỏi mà không chỉ bạn thì nên xấu hổ";
}
