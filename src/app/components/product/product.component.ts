import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product-interface';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NgbRatingConfig]
})
export class ProductComponent implements OnInit {


  currentRate = 5;

  productList: Product[] = [];
  Plist: any = [
  ];

  id = 0;
  data = {
    categories: [
      {
        catId: 1,
        catName: 'cloth',
        catProducts: []
      }
    ]
  }
  // product = [
  //   {
  //     catId:1,
  //     id:1,
  //     image:'assets/laptop1.jpg',
  //     title:'Hp Envy 360x',
  //     description:'16GB RAM, 12 Inch Screen, 2TB Hard Drive',
  //   },
  //   {
  //     catId:1,
  //     id:2,
  //     image:'assets/laptop2.jpg',
  //     title:'Dell Latitude',
  //     description:'8GB RAM, 14 Inch Screen, 1TB Hard Drive'
  //   },
  //   {
  //     catId:1,
  //     id:3,
  //     image:'assets/laptop4.jpeg',
  //     title:'Dell Alienware',
  //     description:'4GB RAM, 17 Inch Screen, 4TB Hard Drive'
  //   },
  //   {
  //     catId:1,
  //     id:4,
  //     image:'assets/laptop4.jpg',
  //     title:'Fujitsu',
  //     description:'2GB RAM, 21 Inch Screen, 2TB Hard Drive',
  //   },
  //   {
  //     catId:1,
  //     id:5,
  //     image:'assets/laptop1.jpg',
  //     title:'Hp Envy 360x',
  //     description:'16GB RAM, 12 Inch Screen, 2TB Hard Drive',
  //   },
  //   {
  //     catId:1,
  //     id:6,
  //     image:'assets/laptop2.jpg',
  //     title:'Dell Latitude',
  //     description:'8GB RAM, 14 Inch Screen, 1TB Hard Drive'
  //   },
  //   {
  //     catId:1,
  //     id:7,
  //     image:'assets/laptop4.jpeg',
  //     title:'Dell Alienware',
  //     description:'4GB RAM, 17 Inch Screen, 4TB Hard Drive'
  //   },
  //   {
  //     catId:1,
  //     id:8,
  //     image:'assets/laptop4.jpg',
  //     title:'Fujitsu',
  //     description:'2GB RAM, 21 Inch Screen, 2TB Hard Drive',
  //   }
  // ];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }


  ngOnInit(): void {
    this.Plist = this.productService.productList;
    this.productList = this.productService.getProducts();
    console.log(this.Plist);
    this.activatedRoute.paramMap.subscribe(map => {
      this.id = +map.get('id')!;
    })
  }
}