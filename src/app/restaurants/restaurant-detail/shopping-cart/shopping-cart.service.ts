import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

	items: CartItem[] = [];

	constructor() { }

	addItem(item: MenuItem) {
		const foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

		if (foundItem) {
			foundItem.quantity += 1;
		} else {
			this.items.push(new CartItem(item));
		}
	}

	clear() {
		this.items = [];
	}

	removeItem(item: CartItem) {
		this.items.splice(this.items.indexOf(item), 1);
	}

	total(): number {
		return this.items
									.map(item => item.value())									// obtém apenas os valores
									.reduce((prev, value) => prev + value, 0);	// 0 = valor inicial da soma
	}

}
