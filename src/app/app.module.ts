import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxImageSwapModule} from 'projects/ngx-image-swap/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageSwapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
