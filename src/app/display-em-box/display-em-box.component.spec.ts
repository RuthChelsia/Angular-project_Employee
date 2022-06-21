import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmBoxComponent } from './display-em-box.component';

describe('DisplayEmBoxComponent', () => {
  let component: DisplayEmBoxComponent;
  let fixture: ComponentFixture<DisplayEmBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEmBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
