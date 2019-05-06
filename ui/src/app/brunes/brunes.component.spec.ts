import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrunesComponent } from './brunes.component';

describe('BrunesComponent', () => {
  let component: BrunesComponent;
  let fixture: ComponentFixture<BrunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
