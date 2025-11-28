import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLayer } from './first-layer';

describe('FirstLayer', () => {
  let component: FirstLayer;
  let fixture: ComponentFixture<FirstLayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
