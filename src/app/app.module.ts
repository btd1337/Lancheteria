import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ClarityModule } from '@clr/angular';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurants/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurants/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurants/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurants/restaurant-detail/reviews/reviews.component';


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
		ReviewsComponent
	],
	exports: [
		RouterModule
	],
	imports: [
		BrowserModule,
		ClarityModule,
		HttpClientModule,
		RouterModule.forRoot(ROUTES),
		UiModule
	],
	providers: [
		HttpClient,
		RestaurantService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
