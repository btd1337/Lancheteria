import { Component, Input, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurants.service';
import { Restaurant } from './restaurant.model';
import { Status } from './status';

@Component({
	selector: 'lan-restaurant',
	templateUrl: './restaurant.component.html',
	styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

	@Input() restaurant: Restaurant;
	fakeArray: any;
	status: Status;
	rest = false;
	placeholder = 'assets/img/restaurants/default.png';

	constructor(private restaurantService: RestaurantService) {
	}

	ngOnInit() {
		this.status = this.restaurantService.getStatusIcon(this.restaurant);
		const lenght = this.restaurant.rating ? Math.trunc( this.restaurant.rating ) : 0;
		this.rest = this.restaurantService.checkRatingRest(this.restaurant, lenght);
		this.fakeArray = new Array(lenght);
	}
}
