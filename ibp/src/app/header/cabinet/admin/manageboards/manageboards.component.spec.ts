import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageboardsComponent } from './manageboards.component';

describe('ManageboardsComponent', () => {
  let component: ManageboardsComponent;
  let fixture: ComponentFixture<ManageboardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageboardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
