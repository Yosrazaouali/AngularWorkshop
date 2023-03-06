import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {
  constructor(private http: HttpClient)  { }
  getProduct(){
    return this.http.get<Products[]>('http://localhost:3000/products') }
    addProduct(product:Products){
      return this.http.post('http://localhost:3000/products',product)
   
  }
}
