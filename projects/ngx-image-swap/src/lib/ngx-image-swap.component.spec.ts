import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxImageSwapComponent} from './ngx-image-swap.component';

describe('NgxImageSwapComponent', () => {
  let component: NgxImageSwapComponent;
  let fixture: ComponentFixture<NgxImageSwapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxImageSwapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
