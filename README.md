# NgxImageSwap

A simple component for swaping two images on hover

## Example

* A simple Example can be found under src/app directory of this repository.

## Installation

`npm i ngx-image-swap`

## API

`import { NgxImageSwapModule } from 'ngx-image-swap'`

### @Inputs()

| Input            | Type    | Required                   | Description                                                                                               |
| ---------------- | ------- | -------------------------- | --------------------------------------------------------------------------------------------------------- |
| firstImageSrc    | string  | **YES**                    | Source for the first image                                                |
| secondImageSrc   | string  | **YES**                    | Source for the second image                                                                       |                       |
| descriptionFirst | string  | NO, default empty          | Description of the first image                                                |
| descriptionSecond| string  | NO, default empty          | Description of the second image 

### Usage

```typescript
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
```

```typescript
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
```

## Running the example in local env
* `npm i`
* Run ng serve for a dev server and running the demo app. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
