import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ThemeService } from 'src/app/service/theme.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-board',
  standalone: true,
  imports: [CommonModule, BreadcrumbModule, TranslateModule],
  templateUrl: './nav-board.component.html',
  styleUrls: ['./nav-board.component.css'],
})
export class NavBoardComponent {
  @Input() currentSection: string = 'Dashboard'; // القيمة الافتراضية
  @Output() sidebarToggle = new EventEmitter<void>(); // لإرسال حدث إخفاء القائمة الجانبية

  items: any[] = []; // العناصر الخاصة بالـ Breadcrumb
  home: any; // الرابط الرئيسي (Home)
  isMenuOpen: boolean = true;
  isDarkMode: boolean = true;
  isArabicLanguage: boolean = false;
  constructor(
    private themeService: ThemeService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en'); // اللغة الافتراضية
    this.updateLanguageState(this.translate.getDefaultLang());
  
    this.translate.onLangChange.subscribe((event) => {
      console.log('Language change detected:', event.lang);
      this.updateLanguageState(event.lang);
    });
  
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
  
  

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.updateLanguageState(lang);
  }

  private updateLanguageState(lang: string): void {
    console.log('Language passed to updateLanguageState:', lang);
    this.isArabicLanguage = lang === 'ar';
    console.log('isArabicLanguage updated to:', this.isArabicLanguage);
  }
  
  ngOnInit() {
    this.updateBreadcrumb();
    this.home = { icon: 'pi pi-home', url: '/' }; // إعداد الرابط الرئيسي
  }

  ngOnChanges() {
    // تحديث الـ Breadcrumb عند تغيير القسم
    this.updateBreadcrumb();
  }

  toggleSidebar() {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidebarToggle.emit(); // إرسال الحدث
  }

  updateBreadcrumb() {
    this.items = [
      { label: 'Home', url: '' },
      { label: this.currentSection }, // تحديث القسم بناءً على القيمة المدخلة
    ];
  }
}
