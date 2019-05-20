import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { MenuItem } from './restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';
import { Status } from './restaurant/status';

@Injectable()
export class RestaurantService {

	endpoint = 'restaurants';
	restaurantsMock: Restaurant[];

	constructor(private http: HttpClient) {}

	getRestaurants(): Observable<Restaurant[]> {
		return this.http.get<Restaurant[]>(`${environment.API}/${this.endpoint}`);
	}

	getRestaurant(id: string): Observable<Restaurant> {
		return this.http.get<Restaurant>(`${environment.API}/${this.endpoint}/${id}`);
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
		return this.http.get(`${environment.API}/restaurants/${id}/reviews`);
	}

	menuOfRestaurant(id: string): Observable<MenuItem[]> {
		return this.http.get<MenuItem[]>(`${environment.API}/restaurants/${id}/menu/items`);
	}
}
