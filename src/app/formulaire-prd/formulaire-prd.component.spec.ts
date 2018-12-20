import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePRDComponent } from './formulaire-prd.component';

describe('FormulairePRDComponent', () => {
  let component: FormulairePRDComponent;
  let fixture: ComponentFixture<FormulairePRDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairePRDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairePRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
