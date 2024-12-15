import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-traffic-chart',
  standalone: true,
  imports: [CommonModule,ProgressBarModule],
  templateUrl: './traffic-chart.component.html',
  styleUrls: ['./traffic-chart.component.css']
})
export class TrafficChartComponent implements OnInit {
  chartOptions: any;

  data = [
    { category: 'dola', value: 5 },
    { category: 'abdo', value: 10 },
    { category: 'zoz', value: 20 },
    { category: 'athhh', value: 30 },
    { category: 'athrhh', value: 40 },
    { category: 'athghh', value: 50 },
    { category: 'atgerhhh', value: 60 },
    { category: 'athehh', value: 70 },
    { category: 'athhergh', value: 80 },
    { category: 'athhergh', value: 90 },
    { category: 'athhergh', value: 100 },
    { category: 'athhergh', value: 110 },
    { category: 'athhergh', value: 120 },
    { category: 'athhergh', value: 130 },
    { category: 'athhergh', value: 140 },
    { category: 'athhergh', value: 150 },
    { category: 'athhergh', value: 160 },
    { category: 'athhergh', value: 170 },
    { category: 'athhergh', value: 180 },
    { category: 'athhergh', value: 190 },
    { category: 'athhergh', value: 200 },
    { category: 'athhergh', value: 210 },
    { category: 'athhergh', value: 220 },
    { category: 'athhergh', value: 230 },
    { category: 'athhergh', value: 240 },
  ];

  ngOnInit() {
    const categories = this.data.map(item => item.category);
    const values = this.data.map(item => item.value);

    const chartDom = document.getElementById('chart')!;
    const myChart = echarts.init(chartDom);

    const option = {
    
      tooltip: {},
      xAxis: {
        type: 'category',
        data: categories,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Value',
          type: 'bar',
          data: values, 
        },
      ],
    };

    myChart.setOption(option);
  }


}
