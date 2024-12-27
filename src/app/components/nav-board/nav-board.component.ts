import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ThemeService } from 'src/app/service/theme.service';

@Component({
  selector: 'app-nav-board',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule],
  templateUrl: './nav-board.component.html',
  styleUrls: ['./nav-board.component.css']
})
export class NavBoardComponent {
  @Input() currentSection: string = 'Dashboard'; // القيمة الافتراضية
  // استقبال حالة الوضع الداكن من المكون الرئيسي
  @Output() sidebarToggle = new EventEmitter<void>(); // لإرسال حدث إخفاء القائمة الجانبية

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

  isMenuOpen: boolean = true;
  toggleSidebar() {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidebarToggle.emit(); // إرسال الحدث
  }
  isDarkMode: boolean = true;

  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
}
