import { Injectable } from '@angular/core';
import { Products } from '../core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product!:Products;
  listProdcut:Products[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 4, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 5, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 6, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  constructor() { }
 addProduct(product:Products)
 {
  this.listProdcut.push(product);
 }





 getTheProduct(ref:number){
  return this.listProdcut.filter(x => x.id == ref);
 }

 getNumberOf = function (list:any[],criteria:string,value:any) {
  return list.filter(x => x[criteria] == value).length;
};
}
