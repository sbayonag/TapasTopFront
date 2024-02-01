import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserReviewsComponent } from './component/user-reviews/user-reviews.component';
import { UserTrophiesComponent } from './component/user-trophies/user-trophies.component';
import { DishListComponent } from './component/dish-list/dish-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'users/:id/reviews', component: UserReviewsComponent },
  { path: 'users/:id/trophies', component: UserTrophiesComponent },
  { path: 'users/:id/profile', component: UserProfileComponent },
  { path: 'dishes', component: DishListComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }