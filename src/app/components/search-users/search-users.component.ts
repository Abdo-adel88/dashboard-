import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
  standalone: true,
  imports:[TranslateModule]
})
export class SearchUsersComponent {
  
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
  onSearch(event: any) {
    const text = event.target.value.trim().toLowerCase(); // تحويل النص إلى حروف صغيرة
    this.sharedService.updateSearchText(text); // إرسال النص عبر الخدمة
  }
}
