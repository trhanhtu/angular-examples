import { Component } from '@angular/core';
import { ContentProjectionComponent } from "../content-projection/content-projection.component";

@Component({
  selector: 'app-show-content',
  standalone: true,
  imports: [ContentProjectionComponent],
  templateUrl: './show-content.component.html',
  styleUrl: './show-content.component.css'
})
export class ShowContentComponent {

}
