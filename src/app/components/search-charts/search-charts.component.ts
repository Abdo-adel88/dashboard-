import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import usersData from 'src/assets/data/users-data.json';
import { SharedService } from 'src/app/service/shared.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-charts',
  standalone: true,
  imports: [CommonModule,BarChartComponent,LineChartComponent,TranslateModule,],
  templateUrl: './search-charts.component.html',
  styleUrls: ['./search-charts.component.css'],
})
export class SearchChartsComponent  {
  private allData = usersData; // البيانات الكاملة
  filteredData = this.allData; // البيانات المفلترة

  isArabicLanguage: boolean = false;
  constructor(
    private translate: TranslateService,
    private sharedService: SharedService
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
  ngOnInit() {
    // الاشتراك في النص من الخدمة
    this.sharedService.currentSearchText.subscribe((searchText) => {
      this.filterData(searchText); // تصفية البيانات
    });
  }

  // دالة لتصفية البيانات بناءً على النص
  filterData(searchText: string) {
    if (searchText) {
      this.filteredData = this.allData.filter((item) =>
        item.name.toLowerCase().includes(searchText)
      );
    } else {
      this.filteredData = this.allData; // إذا كان البحث فارغًا، عرض كل البيانات
    }
  }


}
