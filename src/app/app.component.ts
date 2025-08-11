import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ManComponent } from './man/man.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SportClothesComponent } from './sport-clothes/sport-clothes.component';
import { DiscountComponent } from './discount/discount.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CurrencyPipe,
    ManComponent,
    WomenComponent,
    KidsComponent,
    SportClothesComponent,
    DiscountComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signal';

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    console.log('Search query:', input.value);
    // Implement search logic here (e.g., filter products or navigate to search results)
  }
}

