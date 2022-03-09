import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteFinanceAdminComponent } from './view-delete-finance-admin.component';

describe('ViewDeleteFinanceAdminComponent', () => {
  let component: ViewDeleteFinanceAdminComponent;
  let fixture: ComponentFixture<ViewDeleteFinanceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeleteFinanceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeleteFinanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
