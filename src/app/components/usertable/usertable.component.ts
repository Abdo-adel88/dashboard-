import { Component,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [CommonModule,TableModule,ProgressBarModule],
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css'],
})
export class UsertableComponent {
  users = [
    {
      name: 'ahmed mostafa',
      status: 'New | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-us',
      usage: 10,
      usageColor: 'green',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 10 sec ago',
      activities:false,
      img:'assets/imgs/6.jpg'
    },
    {
      name: 'hossam memy',
      status: 'New | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-us',
      usage: 40,
      usageColor: 'green',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 10 sec ago',
      activities:false,
      img:'assets/imgs/2.jpg'
    },
    {
      name: 'youssef essam',
      status: 'New | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-us',
      usage: 70,
      usageColor: 'green',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 10 sec ago',
      activities:true,
      img:'assets/imgs/3.jpg'
    },
    {
      name: 'ziad ashraf',
      status: 'New | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-us',
      usage: 90,
      usageColor: 'green',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 10 sec ago',
      activities:true,
      img:'assets/imgs/6.jpg'
    },
    {
      name: 'ali yossef',
      status: 'New | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-us',
      usage: 20,
      usageColor: 'green',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 10 sec ago',
      activities:false,
      img:'assets/imgs/2.jpg'
    },
    {
      name: 'saeed hatem',
      status: 'Recurring | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-br',
      usage: 55,
      usageColor: 'blue',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 5 minutes ago',
      activities:true,
      img:'assets/imgs/1.jpg'
    },
    {
      name: 'mohamed adel',
      status: 'Recurring | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-br',
      usage: 80,
      usageColor: 'blue',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 5 minutes ago',
      activities:false,
      img:'assets/imgs/3.jpg'
    },
    {
      name: 'abdo adel',
      status: 'Recurring | Registered: Jan 1, 2023',
     
      countryIcon: 'pi-br',
      usage: 10,
      usageColor: 'blue',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 5 minutes ago',
      activities:true,
      img:'assets/imgs/6.jpg'
    },
  
    {
      name: 'nermeen adel',
      status: 'Recurring | Registered: Jan 1, 2023',
      
      countryIcon: 'pi-br',
      usage: 80,
      usageColor: 'blue',
      paymentIcon: 'pi-credit-card',
      activity: 'Last login: 5 minutes ago',
      activities:true,
      img:'assets/imgs/5.jpg'
    },
   
  ];
 
  
  filteredUsers = [...this.users]; // نسخة من المستخدمين لتطبيق التصفية

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
