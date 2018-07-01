import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MioComponenteComponent } from './mio-componente.component';

describe('MioComponenteComponent', () => {
  let component: MioComponenteComponent;
  let fixture: ComponentFixture<MioComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MioComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
