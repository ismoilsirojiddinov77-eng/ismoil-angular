import { Injectable, signal } from '@angular/core';

export interface ClothingItem {
  id: number;
  name: string;
  price: number;
  imgurl: string;
  discount?: number;
  num?:number;
  liked: boolean;
  color:string;
  type:string;
  size:string
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
      liked: false,
      color:'white',
      type: 'T-short',
      size:'XL'
    },
    {
      id: 2,
      name: 'Erkaklar futbo‘lkasi',
      price: 50,
      imgurl: 'assets/le-sixieme-reve-yn1ohrn0_5Q-unsplash.jpg',
      liked: false,  color:'white',
      type: 'T-short',
      size:'XL'
    }, 
      
  
    
  ]);

  readonly items = this.allitems.asReadonly();

  fav:ClothingItem[]=[];
  savat:ClothingItem[]=[];

  addtofav(par:ClothingItem){
const bro=this.fav.find(el=>el.id===par.id)
if(bro){
  bro.num?bro.num++:bro.num=1;
   console.log(par)
}else{
  this.fav.push({...par,num:1})
  console.log(par)
}
  }

  addtosavat(par:ClothingItem){
const bro =this.savat.find(el=>el.id===par.id)
if(bro){
  bro.num?bro.num++:bro.num=1
}
else{
  this.savat.push({...par, num:1})
}
  }

  toggleLike(id: number) {
    this.allitems.update(items =>
      items.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  }
}

