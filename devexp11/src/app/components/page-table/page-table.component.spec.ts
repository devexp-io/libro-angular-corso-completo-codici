import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTableComponent } from './page-table.component';

describe('PageTableComponent', () => {
  let component: PageTableComponent;
  let fixture: ComponentFixture<PageTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
