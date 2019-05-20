import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ErrorHandler } from '../../utils/errors/app.error-handler';
import { Restaurant } from '../restaurant/restaurant.model';
import { Status } from '../restaurant/status';
import { RestaurantService } from '../restaurants.service';

@Component({
	selector: 'lan-restaurant-detail',
	templateUrl: './restaurant-detail.component.html',
	styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

	restaurant: Restaurant;
	id: string;
	fakeArray: any;
	status: Status;
	rest = false;

	constructor(
		private restaurantService: RestaurantService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {

		this.id = this.route.snapshot.params['id'];

		this.restaurantService.getRestaurant(this.id)
			.subscribe(
				restaurant => this.restaurant = restaurant,
				error => ErrorHandler.handleError(error),
				() => this.initializeRestaurantsData()
			);

	}

	initializeRestaurantsData() {
		this.status = this.restaurantService.getStatusIcon(this.restaurant);
		const lenght = this.restaurant.rating ? Math.trunc( this.restaurant.rating ) : 0;
		this.rest = this.restaurantService.checkRatingRest(this.restaurant, lenght);
		this.fakeArray = new Array(lenght);
	}

}
