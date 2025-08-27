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
  selectedItem: ClothingItem | null = null;

  ngOnInit() {
    // Xizmatdan tanlangan mahsulotni olish
    this.selectedItem = this.server.selectedItem();
    console.log('Selected Item:', this.selectedItem); // Debugging uchun
  }

  addToFavorites() {
    if (this.selectedItem) {
      if (this.selectedItem.liked) {
        this.server.removeFromFav(this.selectedItem.id); // Sevimlilardan olib tashlash
      } else {
        this.server.addToFav(this.selectedItem); // Sevimlilarga qo'shish
        this.server.liked(this.selectedItem.id);
      }
    }
  }

  addToCart() {
    if (this.selectedItem) {
      if (this.selectedItem.basket) {
        this.server.removeFromSavat(this.selectedItem.id); // Savatdan olib tashlash
      } else {
        this.server.addToSavat(this.selectedItem); // Savatga qo'shish
        this.server.basket(this.selectedItem.id);
      }
    }
  }

  ngOnDestroy() {
    // Komponent yopilganda tanlangan mahsulotni tozalash (ixtiyoriy)
    this.server.clearSelectedItem();
  }
}