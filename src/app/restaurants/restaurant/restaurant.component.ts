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
	fakeArray: any;
	status: Status;
	rest = false;

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
		const lenght = Math.trunc( this.restaurant.rating );
		if ((this.restaurant.rating - lenght) > 0) {
			this.rest = true;
		}
		this.fakeArray = new Array(lenght);
	}
}
