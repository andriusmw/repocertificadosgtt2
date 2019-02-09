import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCertificatesComponent } from './create-certificates.component';

describe('CreateCertificatesComponent', () => {
  let component: CreateCertificatesComponent;
  let fixture: ComponentFixture<CreateCertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
