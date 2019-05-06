import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbreesComponent } from './ambrees.component';

describe('AmbreesComponent', () => {
  let component: AmbreesComponent;
  let fixture: ComponentFixture<AmbreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
