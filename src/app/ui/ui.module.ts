import { ClarityModule } from '@clr/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    ClarityModule,
    CommonModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, MainComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
