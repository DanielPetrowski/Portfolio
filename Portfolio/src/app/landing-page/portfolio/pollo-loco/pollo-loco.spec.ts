import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolloLoco } from './pollo-loco';

describe('PolloLoco', () => {
  let component: PolloLoco;
  let fixture: ComponentFixture<PolloLoco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolloLoco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolloLoco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
