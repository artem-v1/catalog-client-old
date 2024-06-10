import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFullDataComponent } from './company-full-data.component';

describe('CompanyFullDataComponent', () => {
  let component: CompanyFullDataComponent;
  let fixture: ComponentFixture<CompanyFullDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyFullDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyFullDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
