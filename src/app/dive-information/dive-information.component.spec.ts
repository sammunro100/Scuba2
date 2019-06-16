import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiveInformationComponent } from './dive-information.component';

describe('DiveInformationComponent', () => {
  let component: DiveInformationComponent;
  let fixture: ComponentFixture<DiveInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiveInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiveInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
