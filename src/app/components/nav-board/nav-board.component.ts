import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-nav-board',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './nav-board.component.html',
  styleUrls: ['./nav-board.component.css']
})
export class NavBoardComponent {
  @Input() currentSection: string = 'Dashboard'; // القيمة الافتراضية

  items: any[] = []; // العناصر الخاصة بالـ Breadcrumb
  home: any; // الرابط الرئيسي (Home)

  ngOnInit() {
    this.updateBreadcrumb();
    this.home = { icon: 'pi pi-home', url: '/' }; // إعداد الرابط الرئيسي
  }

  ngOnChanges() {
    // تحديث الـ Breadcrumb عند تغيير القسم
    this.updateBreadcrumb();
  }

  updateBreadcrumb() {
    this.items = [
      { label: 'Home', url: '' },
      { label: this.currentSection } // تحديث القسم بناءً على القيمة المدخلة
    ];
  }
}

