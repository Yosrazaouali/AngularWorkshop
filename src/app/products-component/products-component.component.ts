import { Component, OnInit } from '@angular/core';
import { Products } from '../core/model/Product';
import { ETIME } from 'constants';


@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title!:string;
  message!:string;
  priceMax!: number;
  count!: number;
  listProdcut!:Products[];
  p!:Products;
  constructor() { }

  ngOnInit(): void {
    this.listProdcut=[
      {id: 0, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 1, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 2, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
      {id: 3, title: "T-shirt 4", price: 18, quantity: 0, like: 0},
      {id: 4, title: "T-shirt 5", price: 18, quantity: 0, like: 0},

   
 ]
   
  }

  buy(i:number){
    this.listProdcut[i].quantity -= 1;
    // this.listProdcut[i].quantity--;
    this.message = "LIKED ";
  }
  Like(i:number){
      this.listProdcut[i].like += 1;
      this.message = "BOUGHT";
  }
   //function  getNumberOf  

}