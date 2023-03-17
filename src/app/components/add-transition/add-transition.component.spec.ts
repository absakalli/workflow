import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransitionComponent } from './add-transition.component';

describe('AddTransitionComponent', () => {
  let component: AddTransitionComponent;
  let fixture: ComponentFixture<AddTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
