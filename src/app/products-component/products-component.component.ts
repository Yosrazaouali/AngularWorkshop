import { Component, OnInit } from '@angular/core';
import { Products } from '../core/model/Product';
import { ETIME } from 'constants';
import { ProductServiceService } from '../service/product-service.service';


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
  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.title="yello :)";
    this.listProdcut=this.service.listProdcut;
    this.count=this.service.getNumberOf(this.listProdcut,'quantity',10);
   
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