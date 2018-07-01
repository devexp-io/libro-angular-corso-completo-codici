import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDebugTestComponent } from './pipe-debug-test.component';

describe('PipeDebugTestComponent', () => {
  let component: PipeDebugTestComponent;
  let fixture: ComponentFixture<PipeDebugTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDebugTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDebugTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
