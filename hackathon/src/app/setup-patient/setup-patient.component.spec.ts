import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPatientComponent } from './setup-patient.component';

describe('SetupPatientComponent', () => {
  let component: SetupPatientComponent;
  let fixture: ComponentFixture<SetupPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
