import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTeamsComponent } from './nav-teams.component';

describe('NavTeamsComponent', () => {
  let component: NavTeamsComponent;
  let fixture: ComponentFixture<NavTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
