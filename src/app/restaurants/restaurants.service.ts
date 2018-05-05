import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant/restaurant.model';
import { Observable } from 'rxjs/Observable';

import { LANCHETERIA_API } from './../../app.api';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantService {

	endpoint = 's9q4a';
	restaurantsMock: Restaurant[];

	constructor(private http: HttpClient) {}

	restaurants(): Observable<Restaurant[]> {
		return this.http.get<Restaurant[]>(`${LANCHETERIA_API}/${this.endpoint}`);
	}
}
