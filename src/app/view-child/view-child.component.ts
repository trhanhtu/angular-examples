import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('uploadfile') uploadfile !: ElementRef;
  @ViewChildren('lineTpl') lineTpl !: QueryList<ElementRef>;

makeFistBlue() {
this.lineTpl.first.nativeElement.style.color = "blue";
}
makeAllRed() {
this.lineTpl.forEach(e=>e.nativeElement.style.color="red");
}
selectFile() {
this.uploadfile?.nativeElement.click();
}

}
