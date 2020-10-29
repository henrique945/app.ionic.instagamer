import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
  ],
})
export class HomeModule {
}
