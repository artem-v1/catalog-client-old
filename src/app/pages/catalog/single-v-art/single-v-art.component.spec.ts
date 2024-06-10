import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVArtComponent } from './single-v-art.component';

describe('SingleVArtComponent', () => {
  let component: SingleVArtComponent;
  let fixture: ComponentFixture<SingleVArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleVArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleVArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
