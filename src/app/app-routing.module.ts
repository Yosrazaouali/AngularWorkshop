import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';




const routes: Routes = [ 

{path:'',redirectTo:'home',pathMatch:'full'},
  {path :'home' , component:HomeComponent},

  {path :'product' , component:ProductsComponentComponent},
  {path :'offers', component:OffresEmploisComponent},
  {path :'product' , component:ProductsComponentComponent},
  {path :'addproduct' , component:AddProductComponent},
  {path:'templateDriven',component:TemplateDrivenFormComponentComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
