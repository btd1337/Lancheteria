import { RestaurantService } from './../../restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
	selector: 'lan-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

	@Input() menuItem: MenuItem;
	@Output() add = new EventEmitter();

	constructor(
	) { }

	ngOnInit() {
	}

	emitAddEvent() {
		this.add.emit(this.menuItem);
	}

}
