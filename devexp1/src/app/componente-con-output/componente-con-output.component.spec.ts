import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConOutputComponent } from './componente-con-output.component';

describe('ComponenteConOutputComponent', () => {
  let component: ComponenteConOutputComponent;
  let fixture: ComponentFixture<ComponenteConOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteConOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteConOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
