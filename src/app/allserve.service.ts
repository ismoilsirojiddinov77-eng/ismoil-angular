
import { Injectable, signal, computed, WritableSignal } from '@angular/core';

export interface ClothingItem {
  id: number;
  name: string;
  price: number;
  imgurl: string;
  discount?: number;
  num?: number;
  liked: boolean;
  basket: boolean;
  color: string;
  type: string;
  size: string;
  filter: string;
}

@Injectable({
  providedIn: 'root'
})
export class AllserveService {
  // Tanlangan mahsulotni saqlash uchun signal
  selectedItem = signal<ClothingItem | null>(null);

  // Tanlangan mahsulotni o'rnatish
  setSelectedItem(item: ClothingItem) {
    this.selectedItem.set(item);
  }

  // Tanlangan mahsulotni tozalash
  clearSelectedItem() {
    this.selectedItem.set(null);
  }
  allitems = signal<ClothingItem[]>([
    // Tops (15 ta mahsulot)
    { id: 1, basket: false, name: 'Red T-shirt', price: 80, imgurl: 'https://images.uzum.uz/d0t82ugn274lpu37hss0/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Tops' },
    { id: 2, basket: false, name: 'black Polo Shirt', price: 90, imgurl: 'https://images.uzum.uz/d1klh1a1146hm2begdgg/original.jpg', liked: false, color: 'black', type: 'Polo', size: 'L', filter: 'Tops' },
    { id: 3, basket: false, name: 'Red Hoodie', price: 120, imgurl: 'https://images.uzum.uz/clo9jct6sfhsc0unifgg/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 4, basket: false, name: 'White Shirt', price: 60, imgurl: 'https://images.uzum.uz/cm1voa7iraaukt5rblfg/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'M', filter: 'Tops' },
    { id: 5, basket: false, name: 'White T-shirt', price: 70, imgurl: 'https://images.uzum.uz/d19bh3r3uvppu2acdjdg/original.jpg', liked: false, color: 'white', type: 'Adidas', size: 'S', filter: 'Tops' },
    { id: 6, basket: false, name: 'White Jacket', price: 150, imgurl: 'https://images.uzum.uz/cuurofmi4n36ls3rn790/original.jpg', liked: false, color: 'white', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 7, basket: false, name: 'Black Hoodie', price: 110, imgurl: 'https://images.uzum.uz/cthu4rui4n368aacbeeg/original.jpg', liked: false, color: 'black', type: 'Puma', size: 'M', filter: 'Tops' },
    { id: 8, basket: false, name: 'Black Jacket', price: 160, imgurl: 'https://images.uzum.uz/cubi5fk5j42bjc4alvg0/original.jpg', liked: false, color: 'black', type: 'Other', size: 'XXL', filter: 'Tops' },
    { id: 9, basket: false, name: 'Black T-shirt', price: 75, imgurl: 'https://images.uzum.uz/d19bh733uvppu2acdjg0/original.jpg', liked: false, color: 'black', type: 'Adidas', size: 'XS', filter: 'Tops' },
    { id: 10, basket: false, name: 'Green Polo coat', price: 85, imgurl: 'https://images.uzum.uz/cstm7b5pq3ggq63e0sk0/original.jpg', liked: false, color: 'green', type: 'Polo', size: 'S', filter: 'Tops' },
    { id: 11, basket: false, name: 'Green Hoodie', price: 130, imgurl: 'https://images.uzum.uz/cnd8k69s99ouqbfvv3u0/original.jpg', liked: false, color: 'green', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 12, basket: false, name: 'Blue T-shirt', price: 90, imgurl: 'https://images.uzum.uz/d2crd5fiub33ceg8t680/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Tops' },
    { id: 13, basket: false, name: 'Blue Hoodie', price: 135, imgurl: 'https://images.uzum.uz/cofqnhkmlbffilat3ftg/t_product_240_high.jpg', liked: false, color: 'blue', type: 'Nike', size: 'XXL', filter: 'Tops' },
    { id: 14, basket: false, name: 'Brown Jacket', price: 170, imgurl: 'https://images.uzum.uz/cst1c1rvgbkpg1nmqgvg/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'XXXL', filter: 'Tops' },
    { id: 15, basket: false, name: 'Brown Polo Shirt', price: 105, imgurl: 'https://images.uzum.uz/ce47ht2vtie1lhbegs8g/original.jpg', liked: false, color: 'brown', type: 'Polo', size: 'S', filter: 'Tops' },

    // Hat (12 ta mahsulot)
    { id: 16, basket: false, name: 'Red Cap', price: 25, imgurl: 'https://images.uzum.uz/cvv8o7ui4n37npaoq8t0/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Hat' },
    { id: 17, basket: false, name: 'Blue Baseball Hat', price: 30, imgurl: 'https://images.uzum.uz/d1ltf0s3obphus6c24e0/original.jpg', liked: false, color: 'blue', type: 'Nike', size: 'L', filter: 'Hat' },
    { id: 18, basket: false, name: 'White Snapback', price: 28, imgurl: 'https://images.uzum.uz/d2jn8gniub35i07h5s90/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Hat' },
    { id: 19, basket: false, name: 'Black Beanie', price: 20, imgurl: 'https://images.uzum.uz/ctqqfq5ht56ksubb8u6g/original.jpg', liked: false, color: 'black', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 20, basket: false, name: ' Trucker Hat', price: 35, imgurl: 'https://images.uzum.uz/d19tps0n274lpu3a5600/original.jpg', liked: false, color: 'brown', type: 'Polo', size: 'L', filter: 'Hat' },
    { id: 21, basket: false, name: 'Brown Fedora', price: 40, imgurl: 'https://images.uzum.uz/d07knqui4n37npaqhi60/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 22, basket: false, name: 'Red Beanie', price: 22, imgurl: 'https://images.uzum.uz/d28p1cl2lln1rmfjg3m0/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'S', filter: 'Hat' },
    { id: 23, basket: false, name: 'Blue Cap', price: 27, imgurl: 'https://images.uzum.uz/crt4j6ksslojjk5qgei0/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Hat' },
    { id: 24, basket: false, name: 'White Trucker Hat', price: 32, imgurl: 'https://images.uzum.uz/cvaj36lpb7f9qcnhl5f0/original.jpg', liked: false, color: 'white', type: 'Polo', size: 'L', filter: 'Hat' },
    { id: 25, basket: false, name: 'Black Snapback', price: 29, imgurl: 'https://images.uzum.uz/d0s0548n274j5scotqe0/original.jpg', liked: false, color: 'black', type: 'Puma', size: 'S', filter: 'Hat' },
    { id: 26, basket: false, name: 'Green Beanie', price: 24, imgurl: 'https://images.uzum.uz/d04uivlpb7f46s887fv0/original.jpg', liked: false, color: 'green', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 27, basket: false, name: 'Brown Cap', price: 26, imgurl: 'https://images.uzum.uz/d1p08d89oh61u9a4901g/original.jpg', liked: false, color: 'brown', type: 'Nike', size: 'L', filter: 'Hat' },

    // Trousers (13 ta mahsulot)
    { id: 28, basket: false, name: 'Blue Jeans', price: 50, imgurl: 'https://images.uzum.uz/cqkuagcqvsse8letu4q0/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Trousers' },
    { id: 29, basket: false, name: 'Black Chinos', price: 45, imgurl: 'https://images.uzum.uz/d0o0opq7s4fo7mqahdn0/original.jpg', liked: false, color: 'black', type: 'Polo', size: 'L', filter: 'Trousers' },
    { id: 30, basket: false, name: 'White Cargo Pants', price: 55, imgurl: 'https://images.uzum.uz/cv08v46i4n36ls3s5aj0/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Trousers' },
    { id: 31, basket: false, name: 'Red Track Pants', price: 40, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/51e18ae6-ba9e-472f-b028-06dfe2bd0903/W+J+BRK+FLC+PANT++24.png', liked: false, color: 'red', type: 'Nike', size: 'XL', filter: 'Trousers' },
    { id: 32, basket: false, name: 'Green Joggers', price: 48, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88cf0ff4-3025-4c5b-a4e6-1571aec807b3/M+NK+CLUB+BB+JOGGER.png', liked: false, color: 'green', type: 'Other', size: 'M', filter: 'Trousers' },
    { id: 33, basket: false, name: 'Brown Chinos', price: 50, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/268d266a-782e-4761-9904-0d724d7f6b64/M+J+BRK+WVN+PANT.png', liked: false, color: 'brown', type: 'Polo', size: 'L', filter: 'Trousers' },
    { id: 34, basket: false, name: 'Blue Cargo Pants', price: 52, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07c07c1f-1b5b-4874-9abb-be1107fa4f59/M+NK+SOLO+SWSH+FLC+CF+PANT.png', liked: false, color: 'blue', type: 'Adidas', size: 'S', filter: 'Trousers' },
    { id: 35, basket: false, name: 'Black Jeans', price: 47, imgurl: 'https://images.uzum.uz/cpsgglr6eisq2rkdc5n0/original.jpg', liked: false, color: 'black', type: 'Nike', size: 'M', filter: 'Trousers' },
    { id: 36, basket: false, name: 'White Track Pants', price: 42, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6966d556-e247-411b-a8be-beb82bf5e668/M+J+BRK+TRACK+SUIT+PANT.png', liked: false, color: 'white', type: 'Puma', size: 'XL', filter: 'Trousers' },
    { id: 37, basket: false, name: 'Red Joggers', price: 46, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ff9dc05b-0bc1-4674-a456-cdd820d2f075/W+J+BRK+FLC+SHORT++24.png', liked: false, color: 'red', type: 'Other', size: 'S', filter: 'Trousers' },
    { id: 38, basket: false, name: 'Green Chinos', price: 49, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd88c458-9263-4057-a75e-f6bc05bde721/SPR+M+NK+PNT+FT.png', liked: false, color: 'green', type: 'Polo', size: 'M', filter: 'Trousers' },
    { id: 39, basket: false, name: 'Brown Jeans', price: 51, imgurl: 'https://images.uzum.uz/d0hhtegn274j5scmi500/original.jpg', liked: false, color: 'brown', type: 'Adidas', size: 'L', filter: 'Trousers' },
    { id: 40, basket: false, name: 'Blue Track Pants', price: 44, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/870ce04f-2dc6-4c4f-968d-704fdbddd382/M+NSW+CLUB+OS+FLC+PANT.png', liked: false, color: 'blue', type: 'Nike', size: 'XL', filter: 'Trousers' },

    // Shoes (10 ta mahsulot)
    { id: 41, basket: false, name: 'Red Sneakers', price: 70, imgurl: 'https://images.uzum.uz/cvdfc9ui4n36ls3vpa3g/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Shoes' },
    { id: 42, basket: false, name: 'Blue Running Shoes', price: 85, imgurl: 'https://images.uzum.uz/cvdfc36i4n36ls3vp9v0/original.jpg', liked: false, color: 'blue', type: 'Nike', size: 'L', filter: 'Shoes' },
    { id: 43, basket: false, name: 'White Sneakers', price: 75, imgurl: 'https://images.uzum.uz/d04isu47fd1idphte280/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Shoes' },
    { id: 44, basket: false, name: 'Black Casual Shoes', price: 80, imgurl: 'https://images.uzum.uz/d21h1sl2llnbjcofphh0/original.jpg', liked: false, color: 'black', type: 'Other', size: 'XL', filter: 'Shoes' },
    { id: 45, basket: false, name: 'Green Sneakers', price: 78, imgurl: 'https://images.uzum.uz/d1tq0552llnbjcoeu4dg/original.jpg', liked: false, color: 'green', type: 'Polo', size: 'M', filter: 'Shoes' },
    { id: 46, basket: false, name: 'Brown Leather Shoes', price: 90, imgurl: 'https://images.uzum.uz/d00f3qlpb7fbmqmobg50/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'L', filter: 'Shoes' },
    { id: 47, basket: false, name: 'Red Running Shoes', price: 82, imgurl: 'https://images.uzum.uz/d23i2dr4eu2ublqhic00/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'S', filter: 'Shoes' },
    { id: 48, basket: false, name: 'Blue Casual Shoes', price: 77, imgurl: 'https://images.uzum.uz/d272ilniub3br320l8rg/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Shoes' },
    { id: 49, basket: false, name: 'White Running Shoes', price: 79, imgurl: 'https://images.uzum.uz/cuuldldpb7f9qcne9ui0/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'XL', filter: 'Shoes' },
    { id: 50, basket: false, name: 'Black Sneakers', price: 81, imgurl: 'https://images.uzum.uz/d1tq0fd2llnbjcoeu4p0/original.jpg', liked: false, color: 'black', type: 'Nike', size: 'L', filter: 'Shoes' }
  ]);

  readonly items = this.allitems.asReadonly();

  fav = signal<ClothingItem[]>([]);
  savat = signal<ClothingItem[]>([]);

  // Computed signal yarating - bu real time holatni ko'rsatadi
  favWithUpdatedLikedStatus = computed(() => {
    const allItems = this.allitems();
    const favItems = this.fav();

    return favItems.map(favItem => {
      const currentItem = allItems.find(item => item.id === favItem.id);
      return currentItem ? { ...favItem, liked: currentItem.liked, basket: currentItem.basket } : favItem;
    });
  });

  // Savat uchun ham xuddi shunday computed signal
  savatWithUpdatedStatus = computed(() => {
    const allItems = this.allitems();
    const savatItems = this.savat();

    return savatItems.map(savatItem => {
      const currentItem = allItems.find(item => item.id === savatItem.id);
      return currentItem ? { ...savatItem, liked: currentItem.liked, basket: currentItem.basket } : savatItem;
    });
  });

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

  // Favoritedan olib tashlash uchun yangi method
  removeFromFav(itemId: number) {
    const currentFav = this.fav();
    this.fav.set(currentFav.filter(item => item.id !== itemId));

    // Asosiy ro'yxatda ham liked holatini o'zgartiring
    this.liked(itemId);
  }

  // Savatdan olib tashlash uchun yangi method
  removeFromSavat(itemId: number) {
    const currentSavat = this.savat();
    this.savat.set(currentSavat.filter(item => item.id !== itemId));

    // Asosiy ro'yxatda ham basket holatini o'zgartiring
    this.basket(itemId);
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

  basket(id: number) {
    this.allitems.update(items =>
      items.map(item =>
        item.id === id ? { ...item, basket: !item.basket } : item
      )
    );
  }

  selectedColors = signal<Set<string>>(new Set());
  selectedBrands = signal<Set<string>>(new Set());
  selectedSizes = signal<Set<string>>(new Set());
  selectedTypes = signal<Set<string>>(new Set());

  filteredItems = computed(() => {
    const items = this.allitems();
    const colors = this.selectedColors();
    const brands = this.selectedBrands();
    const sizes = this.selectedSizes();
    const types = this.selectedTypes();

    return items.filter(item =>
      (colors.size === 0 || colors.has(item.color)) &&
      (brands.size === 0 || brands.has(item.type)) &&
      (sizes.size === 0 || sizes.has(item.size)) &&
      (types.size === 0 || types.has(item.filter))
    );
  });

  toggleFilter(par1: WritableSignal<Set<string>>, par2: string) {
    const bro = new Set(par1());
    if (bro.has(par2)) {
      bro.delete(par2);
    } else {
      bro.add(par2);
    }
    par1.set(bro);
  }
}