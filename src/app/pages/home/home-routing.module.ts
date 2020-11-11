import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];
/*const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'user', loadChildren: () => import('../user-profile/user-profile.module').then(m => m.UserProfileModule) }
    ]
  }
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
