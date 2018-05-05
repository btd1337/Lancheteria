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


@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		HomeComponent,
		RestaurantsComponent,
		RestaurantComponent
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
