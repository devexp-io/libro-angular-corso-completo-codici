import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaeseComponent } from './paese.component';

describe('PaeseComponent', () => {
  let component: PaeseComponent;
  let fixture: ComponentFixture<PaeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
