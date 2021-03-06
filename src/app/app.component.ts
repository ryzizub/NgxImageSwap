import {Component} from '@angular/core';

@Component({
  selector: 'ng-image-swap-root',
  template: `
    <ngx-image-swap
      [firstImageSrc]="'https://www.w3schools.com/w3css/img_lights.jpg'"
      [secondImageSrc]="'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'">
    </ngx-image-swap>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
