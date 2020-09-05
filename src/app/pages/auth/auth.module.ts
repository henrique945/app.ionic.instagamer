import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ColumnOneComponent } from 'src/app/shared/layouts/column-one/column-one.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [
    AuthComponent,
    ColumnOneComponent,
    HeaderComponent,
  ]
})
export class AuthModule { }
