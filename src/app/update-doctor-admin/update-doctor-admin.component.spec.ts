import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorAdminComponent } from './update-doctor-admin.component';

describe('UpdateDoctorAdminComponent', () => {
  let component: UpdateDoctorAdminComponent;
  let fixture: ComponentFixture<UpdateDoctorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDoctorAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoctorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
