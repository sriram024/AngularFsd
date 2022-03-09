import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinanceAdminComponent } from './add-finance-admin.component';

describe('AddFinanceAdminComponent', () => {
  let component: AddFinanceAdminComponent;
  let fixture: ComponentFixture<AddFinanceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinanceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
