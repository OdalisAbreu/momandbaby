import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { ContainerComponent } from './container/container.component';
import { CreateProducComponent } from './create-produc/create-produc.component';
import { ProductComponent } from './product/product.component';
import { BaseComponent } from './base/base.component';
import { FooterComponent } from './footer/footer.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'container', component: ContainerComponent},
  {path: 'new', component: CreateProducComponent},
  {path: 'product', component: ProductComponent},
  {path: 'base', component: BaseComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
