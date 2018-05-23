import { CartItem } from './cart-item.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
	selector: 'lan-shopping-cart',
	templateUrl: './shopping-cart.component.html',
	styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

	constructor(private shoppingCartService: ShoppingCartService) { }

	ngOnInit() {
	}

	addItem(item: MenuItem) {
		this.shoppingCartService.addItem(item);
	}

	clear() {
		this.shoppingCartService.clear();
	}

	items(): CartItem[] {
		return this.shoppingCartService.items;
	}

	removeItem(item: CartItem) {
		this.shoppingCartService.removeItem(item);
	}

	total(): number {
		return this.shoppingCartService.total();
	}

}
