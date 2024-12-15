import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBoardComponent } from './nav-board.component';

describe('NavBoardComponent', () => {
  let component: NavBoardComponent;
  let fixture: ComponentFixture<NavBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavBoardComponent]
    });
    fixture = TestBed.createComponent(NavBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
