import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { FeaturesItemsComponent } from './features-items/features-items.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PriceRangeComponent } from './price-range/price-range.component';
import { AppRoutesModule } from './app-routes/app-routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    NotFoundComponent,
    ProductDetailComponent,
    LoginComponent,
    SliderComponent,
    FeaturesItemsComponent,
    SidebarComponent,
    PriceRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
