import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {Cart} from '../interfaces/cart'

@Injectable()

export class CartService {
  cartList: Cart[] = [
  ];

  itemsCounter = new Subject<number>();

  constructor() {}
  
  getCartLength() {
    return this.cartList.length;
  }
  getCart() {
    return this.cartList;
  }

  addToCart(product: Cart){
    this.cartList.push(product)
    this.itemsCounter.next(this.getCartLength())
  }
  setCart(cartList:any) {
    this.cartList = cartList;
  }

  removeItem(index: number){
    this.cartList.splice(index,1);
    console.log(this.cartList);
    this.itemsCounter.next(this.getCartLength())
    return index;
  }

  updateQuantity(index: number){
    this.cartList[index].quantity;

  }

  removeAll(){
    this.cartList.splice(0,this.cartList.length);
    this.itemsCounter.next(this.getCartLength())
  }
}