import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../core/model/Product';
import { ConsumerProductService } from '../service/consumer-product.service';
import { ProductServiceService } from '../service/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Products;
  listProdcut!:Products[];
  constructor(private service:ProductServiceService,private route:Router, private consumerProduct: ConsumerProductService) { }

  ngOnInit(): void {
    this.product = new Products();
  }

  addProduct(){
   // this.service.addProduct(this.product);
    //this.route.navigateByUrl("/products");
    this.consumerProduct.addProduct(this.product).subscribe({
    next: ()=>this.route.navigateByUrl("/products")})
  }

}