
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
  section: 'men' | 'women' | 'kids' | 'sport'
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
    { id: 1, basket: false, section: 'men', name: 'Red T-shirt', price: 80, imgurl: 'https://images.uzum.uz/d0t82ugn274lpu37hss0/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Tops' },
    { id: 2, basket: false, section: 'men', name: 'black Polo Shirt', price: 90, imgurl: 'https://images.uzum.uz/d1klh1a1146hm2begdgg/original.jpg', liked: false, color: 'black', type: 'Polo', size: 'L', filter: 'Tops' },
    { id: 3, basket: false, section: 'men', name: 'Red Hoodie', price: 120, imgurl: 'https://images.uzum.uz/clo9jct6sfhsc0unifgg/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 4, basket: false, section: 'men', name: 'White Shirt', price: 60, imgurl: 'https://images.uzum.uz/cm1voa7iraaukt5rblfg/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'M', filter: 'Tops' },
    { id: 5, basket: false, section: 'men', name: 'White T-shirt', price: 70, imgurl: 'https://images.uzum.uz/d19bh3r3uvppu2acdjdg/original.jpg', liked: false, color: 'white', type: 'Adidas', size: 'S', filter: 'Tops' },
    { id: 6, basket: false, section: 'men', name: 'White Jacket', price: 150, imgurl: 'https://images.uzum.uz/cuurofmi4n36ls3rn790/original.jpg', liked: false, color: 'white', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 7, basket: false, section: 'men', name: 'Black Hoodie', price: 110, imgurl: 'https://images.uzum.uz/cthu4rui4n368aacbeeg/original.jpg', liked: false, color: 'black', type: 'Puma', size: 'M', filter: 'Tops' },
    { id: 8, basket: false, section: 'men', name: 'Black Jacket', price: 160, imgurl: 'https://images.uzum.uz/cubi5fk5j42bjc4alvg0/original.jpg', liked: false, color: 'black', type: 'Other', size: 'XXL', filter: 'Tops' },
    { id: 9, basket: false, section: 'men', name: 'Black T-shirt', price: 75, imgurl: 'https://images.uzum.uz/d19bh733uvppu2acdjg0/original.jpg', liked: false, color: 'black', type: 'Adidas', size: 'XS', filter: 'Tops' },
    { id: 10, basket: false, section: 'men', name: 'Green Polo coat', price: 85, imgurl: 'https://images.uzum.uz/cstm7b5pq3ggq63e0sk0/original.jpg', liked: false, color: 'green', type: 'Polo', size: 'S', filter: 'Tops' },
    { id: 11, basket: false, section: 'men', name: 'Green Hoodie', price: 130, imgurl: 'https://images.uzum.uz/cnd8k69s99ouqbfvv3u0/original.jpg', liked: false, color: 'green', type: 'Nike', size: 'XL', filter: 'Tops' },
    { id: 12, basket: false, section: 'men', name: 'Blue T-shirt', price: 90, imgurl: 'https://images.uzum.uz/d2crd5fiub33ceg8t680/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Tops' },
    { id: 13, basket: false, section: 'men', name: 'Blue Hoodie', price: 135, imgurl: 'https://images.uzum.uz/cofqnhkmlbffilat3ftg/t_product_240_high.jpg', liked: false, color: 'blue', type: 'Nike', size: 'XXL', filter: 'Tops' },
    { id: 14, basket: false, section: 'men', name: 'Brown Jacket', price: 170, imgurl: 'https://images.uzum.uz/cst1c1rvgbkpg1nmqgvg/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'XXXL', filter: 'Tops' },
    { id: 15, basket: false, section: 'men', name: 'Brown Polo Shirt', price: 105, imgurl: 'https://images.uzum.uz/ce47ht2vtie1lhbegs8g/original.jpg', liked: false, color: 'brown', type: 'Polo', size: 'S', filter: 'Tops' },

    // Hat (12 ta mahsulot)
    { id: 16, basket: false, section: 'men', name: 'Red Cap', price: 25, imgurl: 'https://images.uzum.uz/cvv8o7ui4n37npaoq8t0/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Hat' },
    { id: 17, basket: false, section: 'men', name: 'Blue Baseball Hat', price: 30, imgurl: 'https://images.uzum.uz/d1ltf0s3obphus6c24e0/original.jpg', liked: false, color: 'blue', type: 'Nike', size: 'L', filter: 'Hat' },
    { id: 18, basket: false, section: 'men', name: 'White Snapback', price: 28, imgurl: 'https://images.uzum.uz/d2jn8gniub35i07h5s90/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Hat' },
    { id: 19, basket: false, section: 'men', name: 'Black Beanie', price: 20, imgurl: 'https://images.uzum.uz/ctqqfq5ht56ksubb8u6g/original.jpg', liked: false, color: 'black', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 20, basket: false, section: 'men', name: ' Trucker Hat', price: 35, imgurl: 'https://images.uzum.uz/d19tps0n274lpu3a5600/original.jpg', liked: false, color: 'brown', type: 'Polo', size: 'L', filter: 'Hat' },
    { id: 21, basket: false, section: 'men', name: 'Brown Fedora', price: 40, imgurl: 'https://images.uzum.uz/d07knqui4n37npaqhi60/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 22, basket: false, section: 'men', name: 'Red Beanie', price: 22, imgurl: 'https://images.uzum.uz/d28p1cl2lln1rmfjg3m0/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'S', filter: 'Hat' },
    { id: 23, basket: false, section: 'men', name: 'Blue Cap', price: 27, imgurl: 'https://images.uzum.uz/crt4j6ksslojjk5qgei0/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Hat' },
    { id: 24, basket: false, section: 'men', name: 'White Trucker Hat', price: 32, imgurl: 'https://images.uzum.uz/cvaj36lpb7f9qcnhl5f0/original.jpg', liked: false, color: 'white', type: 'Polo', size: 'L', filter: 'Hat' },
    { id: 25, basket: false, section: 'men', name: 'Black Snapback', price: 29, imgurl: 'https://images.uzum.uz/d0s0548n274j5scotqe0/original.jpg', liked: false, color: 'black', type: 'Puma', size: 'S', filter: 'Hat' },
    { id: 26, basket: false, section: 'men', name: 'Green Beanie', price: 24, imgurl: 'https://images.uzum.uz/d04uivlpb7f46s887fv0/original.jpg', liked: false, color: 'green', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 27, basket: false, section: 'men', name: 'Brown Cap', price: 26, imgurl: 'https://images.uzum.uz/d1p08d89oh61u9a4901g/original.jpg', liked: false, color: 'brown', type: 'Nike', size: 'L', filter: 'Hat' },

    // Trousers (13 ta mahsulot)
    { id: 28, basket: false, section: 'men', name: 'Blue Jeans', price: 50, imgurl: 'https://images.uzum.uz/cqkuagcqvsse8letu4q0/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Trousers' },
    { id: 29, basket: false, section: 'men', name: 'Black Chinos', price: 45, imgurl: 'https://images.uzum.uz/d0o0opq7s4fo7mqahdn0/original.jpg', liked: false, color: 'black', type: 'Polo', size: 'L', filter: 'Trousers' },
    { id: 30, basket: false, section: 'men', name: 'White Cargo Pants', price: 55, imgurl: 'https://images.uzum.uz/cv08v46i4n36ls3s5aj0/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Trousers' },
    { id: 31, basket: false, section: 'men', name: 'Red Track Pants', price: 40, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/51e18ae6-ba9e-472f-b028-06dfe2bd0903/W+J+BRK+FLC+PANT++24.png', liked: false, color: 'red', type: 'Nike', size: 'XL', filter: 'Trousers' },
    { id: 32, basket: false, section: 'men', name: 'Green Joggers', price: 48, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88cf0ff4-3025-4c5b-a4e6-1571aec807b3/M+NK+CLUB+BB+JOGGER.png', liked: false, color: 'green', type: 'Other', size: 'M', filter: 'Trousers' },
    { id: 33, basket: false, section: 'men', name: 'Brown Chinos', price: 50, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/268d266a-782e-4761-9904-0d724d7f6b64/M+J+BRK+WVN+PANT.png', liked: false, color: 'brown', type: 'Polo', size: 'L', filter: 'Trousers' },
    { id: 34, basket: false, section: 'men', name: 'Blue Cargo Pants', price: 52, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07c07c1f-1b5b-4874-9abb-be1107fa4f59/M+NK+SOLO+SWSH+FLC+CF+PANT.png', liked: false, color: 'blue', type: 'Adidas', size: 'S', filter: 'Trousers' },
    { id: 35, basket: false, section: 'men', name: 'Black Jeans', price: 47, imgurl: 'https://images.uzum.uz/cpsgglr6eisq2rkdc5n0/original.jpg', liked: false, color: 'black', type: 'Nike', size: 'M', filter: 'Trousers' },
    { id: 36, basket: false, section: 'men', name: 'White Track Pants', price: 42, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6966d556-e247-411b-a8be-beb82bf5e668/M+J+BRK+TRACK+SUIT+PANT.png', liked: false, color: 'white', type: 'Puma', size: 'XL', filter: 'Trousers' },
    { id: 37, basket: false, section: 'men', name: 'Red Joggers', price: 46, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ff9dc05b-0bc1-4674-a456-cdd820d2f075/W+J+BRK+FLC+SHORT++24.png', liked: false, color: 'red', type: 'Other', size: 'S', filter: 'Trousers' },
    { id: 38, basket: false, section: 'men', name: 'Green Chinos', price: 49, imgurl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dd88c458-9263-4057-a75e-f6bc05bde721/SPR+M+NK+PNT+FT.png', liked: false, color: 'green', type: 'Polo', size: 'M', filter: 'Trousers' },
    { id: 39, basket: false, section: 'men', name: 'Brown Jeans', price: 51, imgurl: 'https://images.uzum.uz/d0hhtegn274j5scmi500/original.jpg', liked: false, color: 'brown', type: 'Adidas', size: 'L', filter: 'Trousers' },
    { id: 40, basket: false, section: 'men', name: 'Blue Track Pants', price: 44, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/870ce04f-2dc6-4c4f-968d-704fdbddd382/M+NSW+CLUB+OS+FLC+PANT.png', liked: false, color: 'blue', type: 'Nike', size: 'XL', filter: 'Trousers' },

    // Shoes (10 ta mahsulot)
    { id: 41, basket: false, section: 'men', name: 'Red Sneakers', price: 70, imgurl: 'https://images.uzum.uz/cvdfc9ui4n36ls3vpa3g/original.jpg', liked: false, color: 'red', type: 'Adidas', size: 'M', filter: 'Shoes' },
    { id: 42, basket: false, section: 'men', name: 'Blue Running Shoes', price: 85, imgurl: 'https://images.uzum.uz/cvdfc36i4n36ls3vp9v0/original.jpg', liked: false, color: 'blue', type: 'Nike', size: 'L', filter: 'Shoes' },
    { id: 43, basket: false, section: 'men', name: 'White Sneakers', price: 75, imgurl: 'https://images.uzum.uz/d04isu47fd1idphte280/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Shoes' },
    { id: 44, basket: false, section: 'men', name: 'Black Casual Shoes', price: 80, imgurl: 'https://images.uzum.uz/d21h1sl2llnbjcofphh0/original.jpg', liked: false, color: 'black', type: 'Other', size: 'XL', filter: 'Shoes' },
    { id: 45, basket: false, section: 'men', name: 'Green Sneakers', price: 78, imgurl: 'https://images.uzum.uz/d1tq0552llnbjcoeu4dg/original.jpg', liked: false, color: 'green', type: 'Polo', size: 'M', filter: 'Shoes' },
    { id: 46, basket: false, section: 'men', name: 'Brown Leather Shoes', price: 90, imgurl: 'https://images.uzum.uz/d00f3qlpb7fbmqmobg50/original.jpg', liked: false, color: 'brown', type: 'Other', size: 'L', filter: 'Shoes' },
    { id: 47, basket: false, section: 'men', name: 'Red Running Shoes', price: 82, imgurl: 'https://images.uzum.uz/d23i2dr4eu2ublqhic00/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'S', filter: 'Shoes' },
    { id: 48, basket: false, section: 'men', name: 'Blue Casual Shoes', price: 77, imgurl: 'https://images.uzum.uz/d272ilniub3br320l8rg/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Shoes' },
    { id: 49, basket: false, section: 'men', name: 'White Running Shoes', price: 79, imgurl: 'https://images.uzum.uz/cuuldldpb7f9qcne9ui0/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'XL', filter: 'Shoes' },
    { id: 50, basket: false, section: 'men', name: 'Black Sneakers', price: 81, imgurl: 'https://images.uzum.uz/d1tq0fd2llnbjcoeu4p0/original.jpg', liked: false, color: 'black', type: 'Nike', size: 'L', filter: 'Shoes' },
    // WOMEN - Tops
    { id: 51, basket: false, section: 'women', name: 'Pink Blouse', price: 95, imgurl: 'https://images.asos-media.com/products/yas-textured-flared-sleeve-blouse-in-pink/208123643-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'pink', type: 'Zara', size: 'M', filter: 'Tops' },
    { id: 52, basket: false, section: 'women', name: 'White Crop Top', price: 85, imgurl: 'https://images.asos-media.com/products/jjxx-feline-ribbed-crop-top-in-white/204979255-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'white', type: 'H&M', size: 'S', filter: 'Tops' },
    { id: 53, basket: false, section: 'women', name: 'Blue Denim Jacket', price: 130, imgurl: 'https://images.asos-media.com/products/arrange-denim-bomber-jacket-with-seam-detail-in-90s-light-wash-blue/208077380-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'blue', type: 'Levi’s', size: 'L', filter: 'Tops' },

    // WOMEN - Hat
    { id: 54, basket: false, section: 'women', name: 'Floral Sun Hat', price: 40, imgurl: 'https://images.asos-media.com/products/sui-ava-striped-crochet-sun-hat-in-yellow/207905148-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'white', type: 'Other', size: 'M', filter: 'Hat' },
    { id: 55, basket: false, section: 'women', name: 'Black Beret', price: 35, imgurl: 'https://images.asos-media.com/products/new-era-ny-yankees-wool-beret-in-black/209375605-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'black', type: 'Other', size: 'S', filter: 'Hat' },
    { id: 56, basket: false, section: 'women', name: 'Red Fedora', price: 45, imgurl: 'https://images.asos-media.com/products/carhartt-wip-heart-patch-trucker-cap-in-red/208502368-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'red', type: 'Other', size: 'L', filter: 'Hat' },

    // WOMEN - Trousers
    { id: 57, basket: false, section: 'women', name: 'White Leggings', price: 60, imgurl: 'https://images.asos-media.com/products/botee-ballet-class-flared-legging-co-ord-in-soft-white/208952458-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'white', type: 'Nike', size: 'S', filter: 'Trousers' },
    { id: 58, basket: false, section: 'women', name: 'Black Skinny Jeans', price: 75, imgurl: 'https://images.asos-media.com/products/pieces-flex-high-waisted-skinny-jeans-in-black/201921873-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'black', type: 'Zara', size: 'M', filter: 'Trousers' },
    { id: 59, basket: false, section: 'women', name: 'Brown Wide Pants', price: 90, imgurl: 'https://images.asos-media.com/products/adidas-originals-wide-leg-satin-joggers-in-brown/207980850-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'brown', type: 'H&M', size: 'L', filter: 'Trousers' },

    // WOMEN - Shoes
    { id: 60, basket: false, section: 'women', name: 'White Sneakers', price: 80, imgurl: 'https://images.asos-media.com/products/calvin-klein-jeans-vulc-flatform-canvas-trainers-in-off-white/208235370-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'white', type: 'Nike', size: 'M', filter: 'Shoes' },
    { id: 61, basket: false, section: 'women', name: 'Black Heels', price: 95, imgurl: 'https://images.asos-media.com/products/asos-design-crowd-high-heeled-pointed-knee-boots-with-buckle-detail-in-black/206596606-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'black', type: 'Zara', size: 'S', filter: 'Shoes' },
    { id: 62, basket: false, section: 'women', name: 'Red Flats', price: 70, imgurl: 'https://images.asos-media.com/products/puma-speedcat-ballet-flats-in-red/208384971-2?$n_320w$&wid=317&fit=constrain', liked: false, color: 'red', type: 'Puma', size: 'L', filter: 'Shoes' },
    // KIDS - Tops
    { id: 63, basket: false, section: 'kids', name: 'Cartoon T-shirt', price: 45, imgurl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/474636/item/usgoods_71_474636_3x4.jpg?width=300', liked: false, color: 'yellow', type: 'Other', size: 'S', filter: 'Tops' },
    { id: 64, basket: false, section: 'kids', name: 'Blue Hoodie', price: 60, imgurl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/481539/item/usgoods_67_481539_3x4.jpg?width=300', liked: false, color: 'blue', type: 'Nike', size: 'M', filter: 'Tops' },
    { id: 65, basket: false, section: 'kids', name: 'White Shirt', price: 50, imgurl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/480347/item/usgoods_01_480347_3x4.jpg?width=300', liked: false, color: 'white', type: 'Adidas', size: 'XS', filter: 'Tops' },

    // KIDS - Hat
    { id: 66, basket: false, section: 'kids', name: 'white winter hat', price: 20, imgurl: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/478144/item/goods_01_478144_3x4.jpg?width=300', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Hat' },
    { id: 67, basket: false, section: 'kids', name: 'Red Beanie', price: 18, imgurl: 'data:image/jpeg;base64,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', liked: false, color: 'red', type: 'Other', size: 'XS', filter: 'Hat' },
    { id: 68, basket: false, section: 'kids', name: 'Yellow Sun Hat', price: 22, imgurl: 'data:image/jpeg;base64,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', liked: false, color: 'yellow', type: 'Other', size: 'M', filter: 'Hat' },

    // KIDS - Trousers
    { id: 69, basket: false, section: 'kids', name: 'Blue Shorts', price: 35, imgurl: 'https://image.uniqlo.com/UQ/ST3/us/imagesgoods/477211/item/usgoods_67_477211_3x4.jpg?width=300', liked: false, color: 'blue', type: 'Nike', size: 'S', filter: 'Trousers' },
    { id: 70, basket: false, section: 'kids', name: 'Gray Sweatpants', price: 40, imgurl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQcDBAYBAgj/xAA8EAABAwMCAgYHBAoDAAAAAAABAAIDBAUREiEGMQcTQWGBkRQiMlFxsdFCVKLBIzNkgpKhwtLi8BUkJf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ALxREQERRnEV1FmtctZpa9zS0NYTjUSfplBJoq8HSY8H1rQ3HdVH+xfY6TYsb2p+e6fP9KCwEVdSdKAA9S0EnvqP8Vt8L8fSXq+x0FRRRU0UsbtDhLqcZBggcsYwHeOEHdIiICIiAiIgLguk+qGaGjJOlztTt8c9h+a71Vd0kEVF5MRdjqo2fX80SuUipw5s+tzssJ07jl5LA2NjooHnV+kaSdx2A93ct+lGYJHZ9pu+e0rRa7LoYhzaX4H7pVHzR0zZo2yPLhqJ2GOWduz3LCyqloqxj2u0zQVDXsx2tGHA/MeC3aP1IGjGSNloX6mLnMqITplj3HeO0IP0W0hzQ4ciMherRsU/pNlt8+c9bTRv82greUUREQEREBVbxqf/AHK8nsLQP4Gq0lVnGoxfq0Z5uafwNRK52DaEtHYFGtcBdomE41Bx/CVLRDDOfNatFZqm4XieogkaxlBTPnkDhnWOWB7juTnuVGOM6HOA2OViuA6yAge5ZDkvJHw3XkgzEc80FzcEu18I2c/scY8hhTagOAzng+0kcvRwp9RRERAREQFWXHDA2/1BP2g134QPyVmquOkSMMu8bj9uJpHgSiVyb3Y+i6ro9o/SYb84jaSFkA+JDyfmFyNQcHV5qx+jGAMsEs/3ipe4H3hoDPm0oRVxbudW2F8zHETifcVtXlnod1qqfb9HO9vkSo+rfimcc7YyguvgMY4OtAP3Vp81PKD4Xkio+GLTDI8a20UWWjn7IW1/zlvFSKZ83Vyk4Ae0jPjyRUki8BBGRyXqAiIgKuulcGKS31HYQ5px3EfVWKuQ6TreKzht02cOppGvG3MFwB+YQVjcniGj655wMZ3Vx8G0TqHhW2U8jdMno7XyAdj3es7+ZKpq3Uzr5fbTaJhmmmmDZNtyxrS4jxDSPFX8NghFLdJVM6j4onkAwyXTJ4EDJ8wVoWy3tukrY5P1LW6pN+Y93iu66WLX1tBDcomgvjcIXgjm05IPgfmoboxkZ/3adzRrjEW53JHrf74hBOW+So0ARU79DdmkAAYHuWtdDruVvmxg9cGPBGDnGQpi4SNld1fWOjYHNZI5pxjPYT8cBaEVBIamB8pYGQj1Gh+oE4IG/iUHR2ypMcogJOh2Me4KZXMUshdNEI/Wd1g3HZ8PNdOgIiICxVNPDVQOgqY2yxP9pjxkFZUQRlJw9Z6OpZU0tspYZ486JGRAObkYOD8FJoiDBWUlPWwGCrhjmiJBLJG5BwtGLh+10eqS32+lppi3GuKINJHPBIHLKlUQcbDTVDxW0lSwxyyl4aXDIzjY94UNw/eaWY+i1beqqgcdW9x3IP2cqyXMa72gD8VrQ2yggmM0NHTslPN7YgHeaDDbqQNDZSzTgeqFIoiD/9k=', liked: false, color: 'gray', type: 'Other', size: 'M', filter: 'Trousers' },
    { id: 71, basket: false, section: 'kids', name: 'Black Joggers', price: 42, imgurl: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/475417/item/goods_09_475417_3x4.jpg?width=300', liked: false, color: 'black', type: 'Puma', size: 'XS', filter: 'Trousers' },

    // KIDS - Shoes
    { id: 72, basket: false, section: 'kids', name: 'Blue Sneakers', price: 55, imgurl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSXaF0aHd0yjSHeQ0pRlG-NhV0PqyUA4dtuj9JzxjrQpcBBmahz4qfrX33ZcXi0qV7j7nFSXgiOAYi5QHPCGAOTqZLs1LDYNL1vE0SmYyV64r2Vwtc1CjA1GJWHXQosBtDL&usqp=CAc', liked: false, color: 'blue', type: 'Adidas', size: 'S', filter: 'Shoes' },
    { id: 73, basket: false, section:   'kids', name: 'White Velcro Shoes', price: 50, imgurl: 'data:image/avif;base64,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', liked: false, color: 'white', type: 'Nike', size: 'XS', filter: 'Shoes' },
    { id: 74, basket: false, section: 'kids', name: 'Red Sandals', price: 48, imgurl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAIHAf/EADgQAAIBAwIDBgEICwAAAAAAAAECAAMEERIxBSFRBhNBYXGBIhQVIzKRwdHhJTNCQ1JTYnKTobH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQADAQEAAAAAAAAAAAAAAAECERIhIv/aAAwDAQACEQMRAD8A+4xEQEREBERAREQEREBERAREQEROK/vhbgpSAetj6pOAPWB2ZngVqRfQKilugMz9xxCvXXA1EbFR8IHrITdJaqHr1FT3/wCTXLXFaqJnrHtVY1rhLao7B3OlXK4BM0MlliWWEREiERECOvUFGkztsBKGrx24d8UaaqPPmZbcXH6PqkbjB/2JlxVPMkKT1xzmsdN4yV3txq8UEHQTj+HmJXO3eB+8JdamcnO+d+c8F98yCoatQ6KCqUbkxdc/YJpvUj9+dBVLmzRtJGBV5aX8CR6dfHzlffktkhyx/q3lytqlGnp1amO7E7yBuHCsQXOEz7manisxbk/LKZbI0uCR7z6yvEbVqS1FqBlYZGN5mUsLWmoFO2RgBn4hk5950GrTRdTuiL4HVjlJl9M5TbTU6i1FDIcgz3MW3arh9ix03Bc+IQZBl7wPj9pxlWFvkOoyVb7pi42MXGxbxETLKO4orXovSfOlhg43mVv+GXtqzsid7RH7S748xNdEsulmWmAFVScHkehk9NwpBE115w+1vQBc0g+NjsR7iUt32cdCz2Vb4fCm/wCM106TOVXu6fXOW8vGR/KqKkulRcY+Omx08vLPjPLirQfu7mk1NujCCyhSwUEjb1ljTmuq63qgJUuUtxuo1USx9eTY9N+pnLc1gyPqOrPUcvTHSTNbV6rEu459SJIlhSA+kqJ7HM15FY65tXq1volO/hNX2ORuE3Hf1VdgVIIAnYlGzpHIGr0EkF0ifq6f2mW5bmi+tXZ8Vt7t9FPUH6MJ3TMcB724vxUZSUpgnIGADtNPONcMpqkREiERECKvb0bhdNeklQeAZcymuOzdNiWtq7J0VhkS+iNrLYyj8AvgTg0mH95/CR/MPEP5dP8AyTXxL1V7rJL2evjv3K+r/lOqj2Zb9/dDHRF+8zRxG6nVc1lZUbKnoog+ZJyTOmIkQiIgIiICIiAiIgIiICIiB//Z', liked: false, color: 'red', type: 'Other', size: 'S', filter: 'Shoes' },

    // SPORT - Tops
    { id: 75, basket: false, section: 'sport', name: 'Dry-Fit Tank Top', price: 60, imgurl: 'https://uz.rizesport.uz/thumb/2/WOzS4WBFkOkeW_KpofpGgQ/400r400/d/liverpool_2023_2024.jpg', liked: false, color: 'gray', type: 'Nike', size: 'M', filter: 'Tops' },
    { id: 76, basket: false, section: 'sport', name: 'Compression Shirt', price: 65, imgurl: 'https://uz.rizesport.uz/thumb/2/yp0NMRk3KjvdQdRulDcJXw/400r400/d/photo_2024-09-11_12-36-10.jpg', liked: false, color: 'blue', type: 'Puma', size: 'L', filter: 'Tops' },
    { id: 77, basket: false, section: 'sport', name: 'Training Hoodie', price: 75, imgurl: 'data:image/jpeg;base64,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', liked: false, color: 'blue', type: 'Adidas', size: 'XL', filter: 'Tops' },

    // SPORT - Hat
    { id: 78, basket: false, section: 'sport', name: 'Sweatband Cap', price: 28, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0159d6bc-6bb0-47d8-8a41-d05f9df45200/U+NK+DFADV+FLY+CAP+U+AB+AEROAD.png', liked: false, color: 'black', type: 'Nike', size: 'M', filter: 'Hat' },
    { id: 79, basket: false, section: 'sport', name: 'Running Visor', price: 30, imgurl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a0d65943-5aba-492b-8762-68152b48ecee/W+NK+TRAIL+REPEL+JKT.png', liked: false, color: 'white', type: 'Puma', size: 'L', filter: 'Hat' },
    { id: 80, basket: false, section: 'sport', name: 'Headband', price: 18, imgurl: 'https://images.uzum.uz/cmjok69s99ouqbfquom0/original.jpg', liked: false, color: 'red', type: 'Other', size: 'S', filter: 'Hat' },

    // SPORT - Trousers
    { id: 81, basket: false, section: 'sport', name: 'Running Shorts', price: 45, imgurl: 'https://images.uzum.uz/cucsv5ui4n324lr6v62g/original.jpg', liked: false, color: 'blue', type: 'Adidas', size: 'M', filter: 'Trousers' },
    { id: 82, basket: false, section: 'sport', name: 'Compression Pants', price: 55, imgurl: 'https://images.uzum.uz/cck403jb3ho5lmuplsa0/original.jpg', liked: false, color: 'black', type: 'Nike', size: 'L', filter: 'Trousers' },
    { id: 83, basket: false, section: 'sport', name: 'Training Joggers', price: 52, imgurl: 'https://images.uzum.uz/d00dtes7fd1p445t4grg/original.jpg', liked: false, color: 'gray', type: 'Puma', size: 'XL', filter: 'Trousers' },

    // SPORT - Shoes
    { id: 84, basket: false, section: 'sport', name: 'Red Running Shoes', price: 85, imgurl: 'https://images.uzum.uz/d25lbd7iub3br320a0r0/original.jpg', liked: false, color: 'red', type: 'Nike', size: 'M', filter: 'Shoes' },
    { id: 85, basket: false, section: 'sport', name: 'Black Gym Shoes', price: 88, imgurl: 'https://images.uzum.uz/d0uqtv33uvpglcmabb80/original.jpg', liked: false, color: 'black', type: 'Adidas', size: 'L', filter: 'Shoes' },
    { id: 86, basket: false, section: 'sport', name: 'White Training Shoes', price: 90, imgurl: 'https://images.uzum.uz/cusuiulpb7f9qcndu590/original.jpg', liked: false, color: 'white', type: 'Puma', size: 'S', filter: 'Shoes' },

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
  selectedSection = signal<'men' | 'women' | 'kids' | 'sport' | null>(null)

  filteredItems = computed(() => {
    const items = this.allitems();
    const colors = this.selectedColors();
    const brands = this.selectedBrands();
    const sizes = this.selectedSizes();
    const types = this.selectedTypes();
    const section = this.selectedSection()

    return items.filter(item =>
      (section === null || item.section === section) &&
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