import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeleteDoctorAdminComponent } from './view-delete-doctor-admin.component';

describe('ViewDeleteDoctorAdminComponent', () => {
  let component: ViewDeleteDoctorAdminComponent;
  let fixture: ComponentFixture<ViewDeleteDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDeleteDoctorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeleteDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
