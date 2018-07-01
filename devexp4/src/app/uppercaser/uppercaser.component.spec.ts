import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaserComponent } from './uppercaser.component';

describe('UppercaserComponent', () => {
  let component: UppercaserComponent;
  let fixture: ComponentFixture<UppercaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UppercaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UppercaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
