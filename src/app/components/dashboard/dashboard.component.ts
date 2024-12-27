import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import * as echarts from 'echarts';
import { UsersdashboardComponent } from '../usersdashboard/usersdashboard.component';
import { UsertableComponent } from '../usertable/usertable.component';
import { TrafficChartComponent } from '../traffic-chart/traffic-chart.component';
import { NavBoardComponent } from '../nav-board/nav-board.component';
import { SearchUsersComponent } from '../search-users/search-users.component';
import usersData from 'src/assets/data/users-data.json';
import { SearchChartsComponent } from '../search-charts/search-charts.component';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ThemeService } from 'src/app/service/theme.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, UsersdashboardComponent, UsertableComponent, TrafficChartComponent, NavBoardComponent,SearchUsersComponent,SearchChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  fiveUsers = usersData.slice(0, 5);
  allUsers = usersData
  sideNavFirst: boolean = true; // حالة القائمة الجانبية
  sideNavSec: boolean = true; // حالة القائمة الجانبية
  currentSection: string = 'Dashboard'; // القسم الافتراضي هو Dashboard
  constructor(private themeService: ThemeService) {}

  toggleTheme(isDark: boolean): void {
    this.themeService.toggleTheme(isDark);
  }
  sidenav(boll: boolean) {
    this.sideNavFirst = boll; // تحديث حالة القائمة الجانبية
    this.currentSection = boll ? 'Dashboard' : 'Users'; // تحديث اسم القسم بناءً على الزر المضغوط
  }
  toggleSidebar() {
    this.sideNavSec = !this.sideNavSec; // عكس حالة إظهار أو إخفاء القائمة الجانبية
  }
  isDarkMode = true;


  
}
