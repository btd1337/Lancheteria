import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
	selector: 'lan-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

	restaurants: Restaurant[] = [
		{
			id: 'tasty-treats',
			name: 'Tasty Treats',
			category: 'Padaria',
			deliveryEstimate: '25min',
			rating: 4.9,
			imagePath: 'assets/img/restaurants/tasty.png',
			about: 'A Bread & Brakery tem 40 anos no mercado. Fazemos os melhores doces e ...',
			hours: 'Funciona de segunda à sexta, de 8h às 23h',
			open: true,
			favorite: false
		},
		{
			id: 'bread-bakery',
			name: 'Bread & Bakery',
			category: 'Padaria',
			deliveryEstimate: '25min',
			rating: 4.9,
			imagePath: 'assets/img/restaurants/breadbakery.png',
			about: 'A Bread & Brakery tem 40 anos no mercado. Fazemos os melhores doces e ...',
			hours: 'Funciona de segunda à sexta, de 8h às 23h',
			open: true,
			favorite: true
		},
		{
			id: 'burger-house',
			name: 'Burger House',
			category: 'Hamburgers',
			deliveryEstimate: '100min',
			rating: 3.5,
			imagePath: 'assets/img/restaurants/burgerhouse.png',
			open: true,
			favorite: false
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
