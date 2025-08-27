import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css'
})
export class FavoriteComponent {
  server = inject(AllserveService)

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
