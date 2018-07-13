import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurants.service';

@Component({
	selector: 'lan-reviews',
	templateUrl: './reviews.component.html',
	styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

	reviews: Observable<any>;

	constructor(
		private restaurantService: RestaurantService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.reviews = this.restaurantService.reviewsOfRestaurant(
			this.route.parent.snapshot.params['id']);
	}

}
