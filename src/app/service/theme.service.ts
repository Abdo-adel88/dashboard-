import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(true); // الوضع الافتراضي Dark Mode
  darkMode$ = this.darkModeSubject.asObservable(); // للإشتراك في الحالة

  toggleTheme(isDark: boolean): void {
    this.darkModeSubject.next(isDark);

    const body = document.body;
    if (isDark) {
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
    }
  }
}
