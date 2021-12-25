import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product-interface'


@Injectable()

export class ProductService {

   productList: Product[] = [
    {
      title: "Sport T-Shirt",
      id: "123",
      img: "assets/tshirt.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: 30000,
      variant: [{
        name: "Size",
        option: [{
          spec: "Large",
          price: 1300
        },
        {
          spec: "Medium",
          price: 1200
        },
      {
        spec:"Small",
        price: 1100
      }]
      },
      {
        name: "Color",
        option: [{
          spec: "Orange",
          price: 100
        },
        {
          spec: "Red",
          price: 200
        }]
      }]
    },
    {
      title: "Nike Shoes",
      id: "124",
      img:"assets/pair-trainers.jpg",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: 20000,
      variant: [{
        name: "Size",
        option: [{
          spec: "Large",
          price: 1300
        },
        {
          spec: "Medium",
          price: 1200
        },
      {
        spec:"Small",
        price: 1100
      }]
      },
      {
        name: "Color",
        option: [{
          spec: "Blue",
          price: 100
        },
        {
          spec: "Green",
          price: 200
        }]
      }]
    }
  ];

  constructor() {
  }

  getProducts() {
    return this.productList;
  }

  getProduct(id: any) {
    let product!: Product;
    this.productList.map(val => {
      if (val.id == id) product = val;
    });
    return product;
  }
}