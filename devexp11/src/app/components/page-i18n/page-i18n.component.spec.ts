import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageI18nComponent } from './page-i18n.component';

describe('PageI18nComponent', () => {
  let component: PageI18nComponent;
  let fixture: ComponentFixture<PageI18nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageI18nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
