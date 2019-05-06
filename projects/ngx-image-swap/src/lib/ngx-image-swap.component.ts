import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ngx-image-swap',
  template: `
    <div style="position: relative;" (mouseleave)="setFirst()" (mouseover)="setSecond()">
      <img style="position: absolute; top: 0; left: 0;" [alt]="descriptionFirst" (load)="changePhotoVisibilityFirst()"
           [attr.src]="firstImageSrc" [@fadeImage]="visibilityPhotoFirst">
      <img style="position: absolute; top: 0; left: 0;" [alt]="descriptionSecond" (load)="changePhotoVisibilitySecond()"
           [attr.src]="secondImageSrc"
           [@fadeImage]="visibilityPhotoSecond">
    </div>
  `,
  styles: [],
  animations: [
    trigger('fadeImage', [
      state('true', style({opacity: 0})),
      state('false', style({opacity: 1})),
      transition('true' + '<=>' + 'false', animate('200ms ease-in'))
    ]),
  ]
})
export class NgxImageSwapComponent {

  @Input() firstImageSrc: string;
  @Input() secondImageSrc: string;
  @Input() descriptionFirst?: string;
  @Input() descriptionSecond?: string;
  private visiblePhotoFirst = false;
  private visiblePhotoSecond = false;
  private showFirst = true;

  get visibilityPhotoFirst(): boolean {
    return this.visiblePhotoFirst && this.showFirst;
  }

  get visibilityPhotoSecond(): boolean {
    return this.visiblePhotoSecond && !this.showFirst;
  }

  setFirst() {
    this.showFirst = true;
  }

  setSecond() {
    this.showFirst = false;
  }

  changePhotoVisibilityFirst() {
    if (!this.visiblePhotoFirst) {
      this.visiblePhotoFirst = true;
    }
  }

  changePhotoVisibilitySecond() {
    if (!this.visiblePhotoSecond) {
      this.visiblePhotoSecond = true;
    }
  }

}
