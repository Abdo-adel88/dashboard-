import { Component } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css'],
  standalone: true,
})
export class SearchUsersComponent {
  constructor(private sharedService: SharedService) {}

  onSearch(event: any) {
    const text = event.target.value.trim().toLowerCase(); // تحويل النص إلى حروف صغيرة
    this.sharedService.updateSearchText(text); // إرسال النص عبر الخدمة
  }
}
