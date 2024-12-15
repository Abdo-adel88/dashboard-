import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import * as echarts from 'echarts';
import { UsersdashboardComponent } from '../usersdashboard/usersdashboard.component';
import { UsertableComponent } from '../usertable/usertable.component';
import { TrafficChartComponent } from '../traffic-chart/traffic-chart.component';
import { NavBoardComponent } from '../nav-board/nav-board.component';
import { SearchUsersComponent } from '../search-users/search-users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule, UsersdashboardComponent, UsertableComponent, TrafficChartComponent, NavBoardComponent,SearchUsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  sideNav: boolean = true; // حالة القائمة الجانبية
  currentSection: string = 'Dashboard'; // القسم الافتراضي هو Dashboard

  sidenav(boll: boolean) {
    this.sideNav = boll; // تحديث حالة القائمة الجانبية
    this.currentSection = boll ? 'Dashboard' : 'Users'; // تحديث اسم القسم بناءً على الزر المضغوط
  }
}
