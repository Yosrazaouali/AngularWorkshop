import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { ProductsComponentComponent } from './products-component/products-component.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TemplateDrivenFormComponentComponent } from './template-driven-form-component/template-driven-form-component.component';

 
@NgModule({
  declarations: [
    AppComponent,
     ProductsComponentComponent,
    NavbarComponent,
    OffresEmploisComponent,
    ArticlesComponent,
    NotfoundComponent,
    HomeComponent,
    AddProductComponent,
    TemplateDrivenFormComponentComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
