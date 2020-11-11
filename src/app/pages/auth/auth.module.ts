//#region Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ColumnOneComponent } from 'src/app/shared/layouts/column-one/column-one.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';

//#endregion

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  declarations: [
    AuthComponent,
    ColumnOneComponent,
    HeaderComponent,
  ]
})
export class AuthModule { }
