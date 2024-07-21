import { AsyncPipe, DatePipe, DecimalPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'app-bultin-pipe',
  standalone: true,
  imports: [DatePipe,TitleCasePipe,SlicePipe,DecimalPipe,AsyncPipe],
  templateUrl: './bultin-pipe.component.html',
  styleUrl: './bultin-pipe.component.css'
})



export class BultinPipeComponent {
  
  today: Date = new Date();
  numsecrect : number = 999.13435;
  longText: string = "có 1 người không biết là trai hay gái mà nó lại giỏi hàng thế kỉ";

}

