import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BixiInformationComponent } from './bixi-information.component';

describe('BixiInformationComponent', () => {
  let component: BixiInformationComponent;
  let fixture: ComponentFixture<BixiInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BixiInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BixiInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
