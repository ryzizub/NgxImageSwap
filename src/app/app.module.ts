import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxImageSwapModule} from 'ngx-image-swap';

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
