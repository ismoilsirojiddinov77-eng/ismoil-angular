import { Injectable, signal } from '@angular/core';

export interface ClothingItem {
  id: number;
  name: string;
  price: number;
  imgurl: string;
  discount?: number;
  liked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AllserveService {
  allitems = signal<ClothingItem[]>([
    {
      id: 1,
      name: 'Erkaklar ko‘ylagi',
      price: 120,
      imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg',
      discount: 20,
      liked: false
    },
    {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    },
    {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    }, {
      id: 2,
      name: 'Erkaklar futbolkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false
    },
    // shu tarzda istalgancha item qo’shish mumkin
  ]);

  readonly items = this.allitems.asReadonly();

  toggleLike(id: number) {
    this.allitems.update(items =>
      items.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  }
}

