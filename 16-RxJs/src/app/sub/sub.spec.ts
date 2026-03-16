import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub } from './sub';

describe('Sub', () => {
  let component: Sub;
  let fixture: ComponentFixture<Sub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sub],
    }).compileComponents();

    fixture = TestBed.createComponent(Sub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
