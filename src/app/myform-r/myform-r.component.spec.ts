import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyformRComponent } from './myform-r.component';

describe('MyformRComponent', () => {
  let component: MyformRComponent;
  let fixture: ComponentFixture<MyformRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyformRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyformRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
