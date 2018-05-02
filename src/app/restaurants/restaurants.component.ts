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
			deliveryEstimate: '40-65m',
			rating: 4.9,
			imagePath: 'assets/img/restaurants/tasty.png',
			about: 'A Bread & Brakery tem 40 anos no mercado. Fazemos os melhores doces e ...',
			hours: 'Funciona de segunda à sexta, de 8h às 23h',
			open: true,
			favorite: false
		},
		{
			id: 'ice-cream',
			name: 'Ice Cream',
			category: 'Sorveteria',
			deliveryEstimate: '20-45m',
			rating: 4.3,
			imagePath: 'assets/img/restaurants/icy.png',
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
			rating: 4.0,
			imagePath: 'assets/img/restaurants/burgerhouse.png',
			open: false,
			favorite: false
		},
		{
			id: 'cofee-corner',
			name: 'Cofee Corner',
			category: 'Cafeteria',
			deliveryEstimate: '25-40',
			rating: 3.4,
			imagePath: 'assets/img/restaurants/coffeecorner.png',
			open: false,
			favorite: false
		},
		{
			id: 'bread-bakery',
			name: 'Bread & Bakery',
			category: 'Padaria',
			deliveryEstimate: '25-40min',
			rating: 3.7,
			imagePath: 'assets/img/restaurants/breadbakery.png',
			about: 'A Bread & Brakery tem 40 anos no mercado. Fazemos os melhores doces e ...',
			hours: 'Funciona de segunda à sexta, de 8h às 23h',
			open: true,
			favorite: true
		},
		{
			id: 'green-food',
			name: 'Green Food',
			category: 'Tradicional',
			deliveryEstimate: '35-60min',
			rating: 4.0,
			imagePath: 'assets/img/restaurants/greenfood.png',
			open: false,
			favorite: false
		},
		{
			id: 'round-table',
			name: 'Round Table',
			category: 'Pizzaria',
			deliveryEstimate: '50-80min',
			rating: 4.2,
			imagePath: 'assets/img/restaurants/roundtable.png',
			open: true,
			favorite: true
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
