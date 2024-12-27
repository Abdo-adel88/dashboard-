import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() chartData: any[] = []; // استقبال البيانات المفلترة
  private lineChartInstance: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chartData']) {
      this.updateChart(); // تحديث المخطط عند تغير البيانات
    }
  }

  private initChart() {
    const chartDom = document.getElementById('lineChart');
    if (chartDom) {
      this.lineChartInstance = echarts.init(chartDom);
      this.lineChartInstance.setOption({
        tooltip: {},
        xAxis: { type: 'category', data: [] },
        yAxis: { type: 'value' },
        series: [
          {
            name: 'Usage',
            type: 'line',
            data: [],
          },
        ],
      });
    }
  }

  private updateChart() {
    if (!this.lineChartInstance) {
      this.initChart(); // إذا لم يكن هناك مخطط، قم بتهيئته
    }
    if (this.lineChartInstance) {
      const preparedData = [
        { name: "Start", usage: 0 }, // نقطة البداية عند 0
        ...this.chartData,
      ];
  
      this.lineChartInstance.setOption({
        xAxis: {
          data: preparedData.map((item) => item.name),
        },
        series: [
          {
            data: preparedData.map((item) => item.usage),
          },
        ],
      });
    }
  }
  

  ngOnDestroy() {
    if (this.lineChartInstance) this.lineChartInstance.dispose();
  }
}
