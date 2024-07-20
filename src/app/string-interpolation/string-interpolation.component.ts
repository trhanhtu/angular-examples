import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.sass'
})
export class StringInterpolationComponent {
  getNum() :number{
    return 1;
  }
  myName: string = 'Angular';

}
