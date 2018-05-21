import { CartItem } from './cart-item.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
	selector: 'lan-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

	constructor(private shoppingCartService: ShoppingCartService) { }

	ngOnInit() {
	}

	items(): CartItem[] {
		return this.shoppingCartService.items;
	}

	total(): number {
		return this.shoppingCartService.total();
	}

}
