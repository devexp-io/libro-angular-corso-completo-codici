import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaserComponent } from './lowercaser.component';

describe('LowercaserComponent', () => {
  let component: LowercaserComponent;
  let fixture: ComponentFixture<LowercaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowercaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowercaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
