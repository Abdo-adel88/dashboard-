import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import * as echarts from 'echarts';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-usersdashboard',
  standalone: true,
  imports: [CommonModule,BreadcrumbModule,TranslateModule],
  templateUrl: './usersdashboard.component.html',
  styleUrls: ['./usersdashboard.component.css']
})
export class UsersdashboardComponent {
  sideNav: boolean = true; // حالة القائمة الجانبية
  currentSection: string = 'Dashboard'; // القسم الافتراضي
  isArabicLanguage: boolean = false;
  constructor(
    private translate: TranslateService,
    
  ) {
    this.translate.setDefaultLang('en'); // اللغة الافتراضية
    this.updateLanguageState(this.translate.getDefaultLang());
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.updateLanguageState(lang);
  }

  private updateLanguageState(lang: string): void {
    this.isArabicLanguage = lang === 'ar';
  }

  sidenav(section: boolean) {
    this.sideNav = section;
    this.currentSection = section ? 'Dashboard' : 'Users'; // تحديث القسم
  }
  ngOnInit() {

  
    // رسم بياني لعدد المستخدمين
    const usersChartDom = document.getElementById('users-chart')!;
    const usersChart = echarts.init(usersChartDom);
    usersChart.setOption({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Users',
          type: 'bar',
          data: [120, 200, 150, 80, 70],
          color: '#ffffff',
        }
      ]
    });

    // رسم بياني للدخل
    const incomeChartDom = document.getElementById('income-chart')!;
    const incomeChart = echarts.init(incomeChartDom);
    incomeChart.setOption({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Income',
          type: 'line',
          data: [500, 700, 800, 600, 900],
          lineStyle: { color: '#ffffff' },
        }
      ]
    });

    // رسم بياني لنسبة التحويل
    const conversionRateChartDom = document.getElementById('conversion-rate-chart')!;
    const conversionRateChart = echarts.init(conversionRateChartDom);
    conversionRateChart.setOption({
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Conversion Rate',
          type: 'line',
          data: [1.2, 2.5, 2.9, 3.0, 2.7],
          areaStyle: { color: 'rgba(255, 202, 40, 0.3)' },
          color: '#ffffff',
        }
      ]
    });

    // رسم بياني لجلسات المستخدمين
   
    const ROOT_PATH = 'https://echarts.apache.org/examples'; // استخدم المسار المناسب لديك


    const chartDom = document.getElementById('weather-chart')!;
    const weatherChart = echarts.init(chartDom);

    // إعداد الخيارات
    const option = {
      title: {
        
       
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#333'
        },
        data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
      },
      series: [
        {
          name: 'Weather Statistics',
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
         
            { value: 510, name: 'CityD' },
            { value: 434, name: 'CityB' },
            { value: 335, name: 'CityA' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    // تعيين الخيارات إلى الرسم البياني
    weatherChart.setOption(option);
  }

  

  // توليد بيانات عشوائية لجلسات المستخدمين
  generateRandomData() {
    const data: [number, number][] = [];
    const baseTime = +new Date();
    let value = Math.random() * 100;
    for (let i = 0; i < 50; i++) {
      value = value + Math.random() * 10 - 5;
      data.push([baseTime + i * 1000, value]);
    }
    return data;
  }
}
