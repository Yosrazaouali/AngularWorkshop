import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormYosraComponent } from './template-driven-form-yosra.component';

describe('TemplateDrivenFormYosraComponent', () => {
  let component: TemplateDrivenFormYosraComponent;
  let fixture: ComponentFixture<TemplateDrivenFormYosraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormYosraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormYosraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
