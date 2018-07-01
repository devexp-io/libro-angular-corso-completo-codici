import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsempioNgForComponent } from './esempio-ng-for.component';

describe('EsempioNgForComponent', () => {
  let component: EsempioNgForComponent;
  let fixture: ComponentFixture<EsempioNgForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsempioNgForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsempioNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
