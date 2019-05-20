import { ImgFallbackModule } from 'ngx-img-fallback';

import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import {
	RestaurantDetailComponent
} from './restaurants/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';
import {
	ShoppingCartComponent
} from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import {
	ShoppingCartService
} from './restaurants/restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantService } from './restaurants/restaurants.service';
import { UiModule } from './ui/ui.module';

registerLocaleData(localePt);


@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		RestaurantsComponent,
		RestaurantComponent,
		RestaurantDetailComponent,
		MenuComponent,
		ShoppingCartComponent,
		MenuItemComponent,
		ReviewsComponent,
		OrderComponent
	],
	exports: [
		RouterModule
	],
	imports: [
		BrowserModule,
		ClarityModule,
		FormsModule,
		HttpClientModule,
		ImgFallbackModule,
		RouterModule.forRoot(ROUTES),
		UiModule
	],
	providers: [
		HttpClient,
		RestaurantService,
		ShoppingCartService,
		{ provide: LOCALE_ID, useValue: 'pt-BR' }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
