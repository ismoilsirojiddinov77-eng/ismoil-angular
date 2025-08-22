import { Injectable, signal, computed, WritableSignal } from '@angular/core';

export interface ClothingItem {
  id: number;
  name: string;
  price: number;
  imgurl: string;
  discount?: number;
  num?: number;
  liked: boolean;
  color: string;
  type: string;
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllserveService {
  allitems = signal<ClothingItem[]>([
    { id: 1, name: 'Red T-shirt', price: 80, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M' },
    { id: 2, name: 'Red Polo Shirt', price: 90, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'red', type: 'Polo', size: 'L' },
    { id: 3, name: 'Red Hoodie', price: 120, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'red', type: 'Nike', size: 'XL' },
    { id: 4, name: 'White Shirt', price: 60, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'white', type: 'Puma', size: 'M' },
    { id: 5, name: 'White T-shirt', price: 70, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'white', type: 'Adidas', size: 'S' },
    { id: 6, name: 'White Jacket', price: 150, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'white', type: 'Nike', size: 'XL' },
    { id: 7, name: 'Black Hoodie', price: 110, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'black', type: 'Puma', size: 'M' },
    { id: 8, name: 'Black Jacket', price: 160, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'black', type: 'Other', size: 'XXL' },
    { id: 9, name: 'Black T-shirt', price: 75, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'black', type: 'Adidas', size: 'XS' },
    { id: 10, name: 'Green Polo', price: 85, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'green', type: 'Polo', size: 'S' },
    { id: 11, name: 'Green Hoodie', price: 130, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'green', type: 'Nike', size: 'XL' },
    { id: 12, name: 'Blue T-shirt', price: 90, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M' },
    { id: 13, name: 'Blue Hoodie', price: 135, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'blue', type: 'Nike', size: 'XXL' },
    { id: 14, name: 'Brown Jacket', price: 170, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'brown', type: 'Other', size: 'XXXL' },
    { id: 15, name: 'Brown Hoodie', price: 140, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'brown', type: 'Puma', size: 'L' },
    { id: 16, name: 'Brown Polo Shirt', price: 105, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'brown', type: 'Polo', size: 'S' },
    { id: 17, name: 'White Sweatshirt', price: 100, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'white', type: 'Polo', size: 'XXL' },
    { id: 18, name: 'Black Sweatshirt', price: 95, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'black', type: 'Nike', size: 'XL' },
    { id: 19, name: 'Red Tank Top', price: 65, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'red', type: 'Other', size: 'SS' },
    { id: 20, name: 'Green Jacket', price: 155, imgurl: 'assets/anomaly-WWesmHEgXDs-unsplash.jpg', liked: false, color: 'green', type: 'Adidas', size: 'XL' }
  ]);

  readonly items = this.allitems.asReadonly();

  fav = signal<ClothingItem[]>([]);
  savat = signal<ClothingItem[]>([]);

  addToFav(item: ClothingItem) {
    const currentFav = this.fav();
    const index = currentFav.findIndex(el => el.id === item.id);

    if (index > -1) {
      const updatedItem = { ...currentFav[index] };
      updatedItem.num = (updatedItem.num ?? 0) + 1;
      this.fav.set([
        ...currentFav.slice(0, index),
        updatedItem,
        ...currentFav.slice(index + 1)
      ]);
    } else {
      this.fav.set([...currentFav, { ...item, num: 1 }]);
    }
  }

  addToSavat(item: ClothingItem) {
    const currentSavat = this.savat();
    const index = currentSavat.findIndex(el => el.id === item.id);

    if (index > -1) {
      const updatedItem = { ...currentSavat[index] };
      updatedItem.num = (updatedItem.num ?? 0) + 1;
      this.savat.set([
        ...currentSavat.slice(0, index),
        updatedItem,
        ...currentSavat.slice(index + 1)
      ]);
    } else {
      this.savat.set([...currentSavat, { ...item, num: 1 }]);
    }
  }

  liked(id: number) {
    this.allitems.update(items =>
      items.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  }

  selectedColors = signal<Set<string>>(new Set());
  selectedBrands = signal<Set<string>>(new Set());
  selectedSizes = signal<Set<string>>(new Set());

  filteredItems = computed(() => {
    const items = this.allitems();
    const colors = this.selectedColors();
    const brands = this.selectedBrands();
    const sizes = this.selectedSizes();

    return items.filter(item =>
      (colors.size === 0 || colors.has(item.color)) &&
      (brands.size === 0 || brands.has(item.type)) &&
      (sizes.size === 0 || sizes.has(item.size))
    );
  });

  toggleFilter(setSignal: WritableSignal<Set<string>>, value: string) {
    const current = new Set(setSignal());
    if (current.has(value)) {
      current.delete(value);
    } else {
      current.add(value);
    }
    setSignal.set(current);
  }
}

