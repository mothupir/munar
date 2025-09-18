import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Browse } from './browse';

describe('Dashboard', () => {
  let component: Browse;
  let fixture: ComponentFixture<Browse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Browse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Browse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
