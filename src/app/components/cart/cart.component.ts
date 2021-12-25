import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: Cart[] = []
  quantity = 0;
  totalPrice!: number;
  netAmount!: number;
  qtyForm!: FormGroup;

  constructor(private cartProducts: CartService, private fb:FormBuilder) {

    this.qtyForm = this.fb.group({
      inpQty: this.quantity
    })
   }
    
  increament(index: number){
    this.cartList[index].quantity += 1;
    this.cartList[index].totalPrice = this.cartList[index].price * this.cartList[index].quantity;
    this.netAmount = this.cartList.reduce((acc,product)=> acc + product.totalPrice, 0);
  }

  decreament(index: number){
    if(this.cartList[index].quantity > 1)
    this.cartList[index].quantity -= 1
    this.cartList[index].totalPrice = this.cartList[index].price * this.cartList[index].quantity;
    this.netAmount = this.cartList.reduce((acc,product)=> acc + product.totalPrice, 0);
  }
   
  removeItem(index: number){
    this.cartProducts.removeItem(index);
    this.netAmount = this.cartList.reduce((acc,product)=> acc + product.totalPrice, 0); 
  }

  removeAll(){
    this.cartProducts.removeAll();
    this.netAmount = this.cartList.reduce((acc,product)=> acc + product.totalPrice, 0);
  }

  ngOnInit(): void {
    this.cartList = this.cartProducts.getCart();
    console.log("Cart Items", this.cartList); 
    this.netAmount = this.cartList.reduce((acc,product)=> acc + product.totalPrice, 0); 
  }

  variantsById(id:number): any[]{

    const targetedProduct = this.cartList.find((_,idx) => idx === id)
    if(!targetedProduct){
      return []
    }
    const {variants} = targetedProduct
     const variantList = Object.keys(variants).map(variantName => (
      {
        variantName,
        specName:variants[variantName].spec
      }
    ))
    console.log("variant list",variantList)
    return variantList
  }
}