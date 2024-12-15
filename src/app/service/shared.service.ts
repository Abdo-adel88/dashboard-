import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private searchText = new BehaviorSubject<string>(''); // التخزين المؤقت للنص
  currentSearchText = this.searchText.asObservable();

  constructor() {}

  updateSearchText(text: string) {
    this.searchText.next(text);
  }
}
