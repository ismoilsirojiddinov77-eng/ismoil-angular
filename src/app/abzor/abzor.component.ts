import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AllserveService, ClothingItem } from '../allserve.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-abzor',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './abzor.component.html',
  styleUrl: './abzor.component.css'
})
export class AbzorComponent {
  router = inject(Router);
  server = inject(AllserveService);


  get selectedItem(): ClothingItem | null {
    return this.server.selectedItem();
  }

  addToFavorites() {
    const item = this.selectedItem;
    if (item) {
      this.server.addToFav(item);
      this.server.liked(item.id);
    }
  }

  addToCart() {
    const item = this.selectedItem;
    if (item) {
      this.server.addToSavat(item);
      this.server.basket(item.id);
    }
  }

  goToCart() {
    this.router.navigate(['/savat']);
  }
  
}