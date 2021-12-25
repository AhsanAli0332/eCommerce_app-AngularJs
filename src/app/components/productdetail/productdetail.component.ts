import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { variant, variantProp } from 'src/app/interfaces/cart';
import { Product } from 'src/app/interfaces/product-interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
/**
 * @title Button toggle selection mode
 */
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

 
  radioForm!: FormGroup;
  productList: Product[] = [];
  product!: Product;
  newPrice!: number;
  addedVariants: variant= {};
  clicked = false;
  cartItem!: any;
  updatedPrice!: number;
  qty!: string;

  _value: number = 1;
  _step: number = 1;
  _min: number = 0;
  _max: number = 5;
  _wrap: boolean = false;
  color: string = 'default';
 
  constructor(private productService: ProductService, private route: ActivatedRoute, private fb: FormBuilder, private cartService: CartService) {
    this.productList = productService.getProducts();
    this.radioForm = this.fb.group({}); 
  }
    
  incrementValue(step: number = 1): void {
    let inputValue = this._value + step;
  
    if (this._wrap) {
      inputValue = this.wrappedValue(inputValue);
    }
    this._value = inputValue ;
  }

  private wrappedValue(inputValue:any): number{
    if (inputValue > this._max) {
      return this._min + inputValue - this._max;
    }
    if (inputValue < this._min) {
      if (this._max === Infinity) {
        return 0;
      }
      return this._max + inputValue;
    }
    return inputValue;
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return !this._wrap && inputValue <= this._min;
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return !this._wrap && inputValue >= this._max;
  }


  add(){
    this.cartItem = {
      title: this.product.title,
      img: this.product.img,
      quantity:this._value,
      price:this.newPrice,
      totalPrice: this.newPrice * this._value,
      variants: this.addedVariants
    }
    this.cartService.addToCart(this.cartItem);
    this.radioForm.reset();
    this._value = 1;
    console.log(this.cartItem);
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param)
      if (param) {
        this.product = this.productService.getProduct(param.id);
        console.log("product ", this.product);
        for (let v of this.product.variant) {
            this.radioForm.addControl(v.name, new FormControl(null, [Validators.required]));
        }

        // this.radioForm.addControl(this.qty, new FormControl(this._value))

        this.newPrice = this.product.price;

        this.radioForm.valueChanges.subscribe((variantData:variant) => {
          console.log("Variant Data",variantData);
          this.addedVariants = variantData;
          let price = 0
          const temp = Object.entries(variantData).forEach(([specName , detail]: [string , variantProp]) => {
            if(detail){
              price += detail.price; 
           }
          })
          this.newPrice = price + this.product.price;
          // this.updatedPrice = this.newPrice * this._value;
          console.log("price",price);
          //console.log(this.sName);
          // var sum = temp.reduce((acc:any, cur:any) => acc + cur, 0);
          // console.log("Its a new Price", sum);
          // this.newPrice = this.product.price + sum;
         }
         
          // .map(([varName, detail]: any) => {
          //   return !!detail ? detail.price : 0
        )
      }
    })
    console.log("Cart Items are",this.cartItem)
  }
}