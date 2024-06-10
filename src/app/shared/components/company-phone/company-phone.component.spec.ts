import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPhoneComponent } from './company-phone.component';

describe('CompanyPhoneComponent', () => {
  let component: CompanyPhoneComponent;
  let fixture: ComponentFixture<CompanyPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyPhoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
