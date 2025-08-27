import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';

@Component({
  selector: 'app-savat',
  standalone: true,
  imports: [],
  templateUrl: './savat.component.html',
  styleUrl: './savat.component.css'
})
export class SavatComponent {
  server = inject(AllserveService);

  // Jami summani hisoblash
  getTotalPrice(): number {
    return this.server.savatWithUpdatedStatus().reduce((total, item) => {
      return total + (item.price * (item.num || 1));
    }, 0);
  }

  // Mahsulot sonini oshirish
  increaseQuantity(itemId: number) {
    const currentSavat = this.server.savat();
    const updatedSavat = currentSavat.map(item => {
      if (item.id === itemId) {
        return { ...item, num: (item.num || 1) + 1 };
      }
      return item;
    });
    this.server.savat.set(updatedSavat);
  }

  // Mahsulot sonini kamaytirish
  decreaseQuantity(itemId: number) {
    const currentSavat = this.server.savat();
    const item = currentSavat.find(item => item.id === itemId);
    
    if (item && (item.num || 1) <= 1) {
      // Agar miqdor 1 ga teng yoki kichik bo'lsa, savatdan olib tashlash
      this.server.removeFromSavat(itemId);
    } else {
      // Miqdorni kamaytirish
      const updatedSavat = currentSavat.map(item => {
        if (item.id === itemId) {
          return { ...item, num: (item.num || 1) - 1 };
        }
        return item;
      });
      this.server.savat.set(updatedSavat);
    }
  }

  // Savatni tozalash
  clearCart() {
    // Barcha itemlarning basket holatini false qilish
    const savatItems = this.server.savat();
    savatItems.forEach(item => {
      this.server.basket(item.id);
    });
    
    // Savatni tozalash
    this.server.savat.set([]);
  }
}