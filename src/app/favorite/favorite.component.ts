import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  server = inject(AllserveService)
  router=inject(Router)

 goToShop() {
  // Shop sahifasiga o'tish
  this.router.navigate(['/shop']);
}

exploreCategories() {
  // Kategoriyalar sahifasiga o'tish
  this.router.navigate(['/categories']);
}

goToCategory(category: string) {
  // Ma'lum kategoriyaga o'tish
  this.router.navigate(['/category', category]);
}
  // Savatni tozalash
  clearCart() {
    // Barcha itemlarning basket holatini false qilish
    const favitem = this.server.fav();
    favitem.forEach(item => {
      this.server.liked(item.id);
    });

    // Savatni tozalash
    this.server.fav.set([]);
  }

}
