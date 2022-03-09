import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteEmployeeAdminComponent } from './view-delete-employee-admin.component';

describe('ViewDeleteEmployeeAdminComponent', () => {
  let component: ViewDeleteEmployeeAdminComponent;
  let fixture: ComponentFixture<ViewDeleteEmployeeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeleteEmployeeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeleteEmployeeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
