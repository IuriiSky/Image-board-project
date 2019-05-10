import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymentionsComponent } from './mymentions.component';

describe('MymentionsComponent', () => {
  let component: MymentionsComponent;
  let fixture: ComponentFixture<MymentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
