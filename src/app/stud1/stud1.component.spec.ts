import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stud1Component } from './stud1.component';

describe('Stud1Component', () => {
  let component: Stud1Component;
  let fixture: ComponentFixture<Stud1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stud1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stud1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
