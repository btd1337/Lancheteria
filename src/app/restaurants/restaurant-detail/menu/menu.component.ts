import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restaurants.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
	selector: 'lan-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	menu: MenuItem[];

	constructor(
		private restaurantService: RestaurantService,
		private route: ActivatedRoute
	) {
		this.menu = new Array<MenuItem>();
	}

	ngOnInit() {
		this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
			.subscribe(
				result => { this.menu = result; console.log(result); },
				error => console.log('Ocorreu um erro ao obter o menu deste restaurante')
			);
	}

	addMenuItem(item: MenuItem) {
		console.log(item);
	}

}
