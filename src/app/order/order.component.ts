import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lan-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	itens: number;

	constructor() {
		this.itens = 28;
	}

	ngOnInit() {
	}

}
