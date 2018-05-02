import { Restaurant } from './restaurant.model';
import { Component, OnInit, Input } from '@angular/core';
import { Status } from './status';

@Component({
	selector: 'lan-restaurant',
	templateUrl: './restaurant.component.html',
	styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

	@Input() restaurant: Restaurant;
	fakeArray = new Array(5);
	status: Status;

	constructor() {
	}

	ngOnInit() {
		if (this.restaurant.open) {
			this.status = {
				icon: 'success-standard',
				message: 'Aberto'
			};
		} else {
			this.status = {
				icon: 'no-access',
				message: 'Fechado'
			};
		}
	}

}
