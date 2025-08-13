import { Injectable } from '@angular/core';

export interface allserve {
  price: number,
  name: string,

}

@Injectable({
  providedIn: 'root'
})
export class AllserveService {

  constructor() { }
}
