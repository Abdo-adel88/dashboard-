import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficChartComponent } from './traffic-chart.component';

describe('TrafficChartComponent', () => {
  let component: TrafficChartComponent;
  let fixture: ComponentFixture<TrafficChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrafficChartComponent]
    });
    fixture = TestBed.createComponent(TrafficChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
