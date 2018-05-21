import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
	imports: [
		ClarityModule,
		CommonModule,
		RouterModule
	],
	declarations: [LayoutComponent, SidebarComponent, MainComponent, FooterComponent],
	exports: [LayoutComponent]
})
export class UiModule { }
