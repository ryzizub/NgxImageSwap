import {NgModule} from '@angular/core';
import {NgxImageSwapComponent} from './ngx-image-swap.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgxImageSwapComponent],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [NgxImageSwapComponent]
})
export class NgxImageSwapModule {
}
