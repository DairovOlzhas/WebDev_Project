import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShefComponent } from './shef.component';

describe('ShefComponent', () => {
  let component: ShefComponent;
  let fixture: ComponentFixture<ShefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
