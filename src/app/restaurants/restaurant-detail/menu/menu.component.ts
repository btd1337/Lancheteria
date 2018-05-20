import { MenuItem } from './../menu-item/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lan-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menu: Observable<MenuItem[]>;

	constructor(
		private restaurantService: RestaurantService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.menu = this.restaurantService.menuOfRestaurant(
			this.route.parent.snapshot.params['id']
		);
	}

	addMenuItem(item: MenuItem) {
		console.log(item);
	}

}
