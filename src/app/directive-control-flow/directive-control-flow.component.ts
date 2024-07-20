import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-directive-control-flow',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './directive-control-flow.component.html',
  styleUrl: './directive-control-flow.component.css'
})
export class DirectiveControlFlowComponent {
  canShow: boolean = false;
  listPage: string[] = [
    "mở bài",
    "cảm ơn",
    "giới thiệu đề tài",
    "phương pháp luận",
    "kết thúc",
    "tham khảo"
  ];
  inputvaluetypescript: string = "";
  myplaceHolderContext: { implicit: string, localVie: string } = {
    implicit: "thế giới",
    localVie: "bạn"
  };

}
