import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() chartData: any[] = []; // استقبال البيانات المفلترة
  private chartInstance: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      this.initChart();
    }
  }

  initChart() {
    const chartDom = document.getElementById('barChart');
    if (chartDom) {
      if (!this.chartInstance) {
        this.chartInstance = echarts.init(chartDom);
      }
      this.chartInstance.setOption({
        xAxis: {
          type: 'category',
          data: this.chartData.map((item) => item.name),
        },
        yAxis: { type: 'value' },
        series: [
          {
            type: 'bar',
            data: this.chartData.map((item) => item.usage),
          },
        ],
      });
    }
  }
}
