import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BixiMapComponent } from './bixi-map.component';

describe('BixiMapComponent', () => {
  let component: BixiMapComponent;
  let fixture: ComponentFixture<BixiMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BixiMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BixiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
