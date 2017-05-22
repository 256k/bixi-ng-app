import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BixiResultComponent } from './bixi-result.component';

describe('BixiResultComponent', () => {
  let component: BixiResultComponent;
  let fixture: ComponentFixture<BixiResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BixiResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BixiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
