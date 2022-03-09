import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinanceAdminComponent } from './update-finance-admin.component';

describe('UpdateFinanceAdminComponent', () => {
  let component: UpdateFinanceAdminComponent;
  let fixture: ComponentFixture<UpdateFinanceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFinanceAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
