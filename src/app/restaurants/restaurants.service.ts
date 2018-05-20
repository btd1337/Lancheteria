import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';

import { LANCHETERIA_API } from './../../app.api';
import { Injectable } from '@angular/core';
import { Status } from './restaurant/status';

@Injectable()
export class RestaurantService {

	endpoint = 'restaurants';
	restaurantsMock: Restaurant[];

	constructor(private http: HttpClient) {}

	getRestaurants(): Observable<Restaurant[]> {
		return this.http.get<Restaurant[]>(`${LANCHETERIA_API}/${this.endpoint}`);
	}

	getRestaurant(id: string): Observable<Restaurant> {
		return this.http.get<Restaurant>(`${LANCHETERIA_API}/${this.endpoint}/${id}`);
	}

	getStatusIcon(restaurant: Restaurant): Status {
		let status: Status;

		if (restaurant.open) {
			status = {
				icon: 'success-standard',
				message: 'Aberto'
			};
		} else {
			status = {
				icon: 'no-access',
				message: 'Fechado'
			};
		}
		return status;
	}

	checkRatingRest(restaurant: Restaurant, lenght: number) {
		if ((restaurant.rating - lenght) > 0) {
			return true;
		} else {
			return false;
		}
	}

	reviewsOfRestaurant(id: string): Observable<any> {
		return this.http.get(`${LANCHETERIA_API}/restaurants/${id}/reviews`);
	}

	menuOfRestaurant(id: string): Observable<any> {
		return this.http.get(`${LANCHETERIA_API}/restaurants/${id}/menu`);
	}
}
