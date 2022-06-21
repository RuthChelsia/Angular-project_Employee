import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmboxComponent } from './embox.component';

describe('EmboxComponent', () => {
  let component: EmboxComponent;
  let fixture: ComponentFixture<EmboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
