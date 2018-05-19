import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';
import { ErrorHandler } from '../utils/errors/app.error-handler';

@Component({
	selector: 'lan-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

	restaurants: Restaurant[];

	constructor(private restaurantsService: RestaurantService) { }

	ngOnInit() {
		this.restaurantsService.getRestaurants().subscribe(
			restaurants => this.restaurants = restaurants,
			error => ErrorHandler.handleError(error)
		);
	}

}
