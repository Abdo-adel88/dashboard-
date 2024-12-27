import { Component,Input,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedService } from 'src/app/service/shared.service';
import { PaginatorModule } from 'primeng/paginator';
import usersData from 'src/assets/data/users-data.json'; 


@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [CommonModule,TableModule,ProgressBarModule, PaginatorModule],
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent {
  
 
  @Input() users: any[] = [];
  filteredUsers = [...this.users]; // نسخة من المستخدمين لتطبيق التصفية
  // نسخة للتصفية

  ngOnChanges() {
    // تحديث filteredUsers عند تغير الـ users الممررة
    this.filteredUsers = [...this.users];
  }
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentSearchText.subscribe((searchText) => {
      this.filterUsers(searchText);
    });
  }

  filterUsers(searchText: string) {
    if (searchText) {
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(searchText)
      );
    } else {
      this.filteredUsers = [...this.users]; // إعادة تعيين الجدول بالكامل إذا كان الإدخال فارغًا
    }
  }
}
