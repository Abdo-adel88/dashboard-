import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchChartsComponent } from './search-charts.component';

describe('SearchChartsComponent', () => {
  let component: SearchChartsComponent;
  let fixture: ComponentFixture<SearchChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchChartsComponent]
    });
    fixture = TestBed.createComponent(SearchChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
