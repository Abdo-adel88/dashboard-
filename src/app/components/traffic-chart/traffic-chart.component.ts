import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ProgressBarModule } from 'primeng/progressbar';
import usersData from 'src/assets/data/users-data.json'; 
@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  imports: [CommonModule,ProgressBarModule],
  templateUrl: './traffic-chart.component.html',
  styleUrls: ['./traffic-chart.component.css']
})
export class TrafficChartComponent implements OnInit {
  chartOptions: any;

  data = usersData; // استخدام البيانات من ملف JSON

  ngOnInit() {
    // استخراج الأسماء (name) والقيم (usage) من البيانات
    const categories = this.data.map(item => item.name);
    const values = this.data.map(item => item.usage);

    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
      tooltip: {},
      xAxis: {
        type: 'category',
        data: categories, // الأسماء (name) على المحور السيني
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Usage',
          type: 'bar',
          data: values, // القيم (usage) على المحور الصادي
        },
      ],
    };

    myChart.setOption(option);
  }


}
