import { Restaurant } from './restaurant.model';
import { Component, OnInit, Input } from '@angular/core';
import { Status } from './status';
import { RestaurantService } from '../restaurants.service';

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

	constructor(private restaurantService: RestaurantService) {
	}

	ngOnInit() {
		this.status = this.restaurantService.getStatusIcon(this.restaurant);
		const lenght = Math.trunc( this.restaurant.rating );
		this.rest = this.restaurantService.checkRatingRest(this.restaurant, lenght);
		this.fakeArray = new Array(lenght);
	}
}
