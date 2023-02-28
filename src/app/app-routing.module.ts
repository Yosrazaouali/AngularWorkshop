import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { TemplateDrivenFormYosraComponent } from './template-driven-form-yosra/template-driven-form-yosra.component';




const routes: Routes = [ 

{path:'',redirectTo:'home',pathMatch:'full'},
  {path :'home' , component:HomeComponent},
  {path : 'products/:id' , component : ProductDetailComponent},
  {path :'product' , component:ProductsComponentComponent},
  {path :'offers', component:OffresEmploisComponent},
  {path :'product' , component:ProductsComponentComponent},
  {path :'addproduct' , component:AddProductComponent},
  {path:'templateDrivenyosra',component:TemplateDrivenFormYosraComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule { }
