import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlondesComponent } from './blondes.component';

describe('BlondesComponent', () => {
  let component: BlondesComponent;
  let fixture: ComponentFixture<BlondesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlondesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlondesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
