import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserTrophiesComponent } from './user-trophies/user-trophies.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserProfileComponent },
  { path: 'users/:id/reviews', component: UserReviewsComponent },
  { path: 'users/:id/trophies', component: UserTrophiesComponent },
  { path: 'users/:id/profile', component: UserProfileComponent },
  { path: '**', redirectTo: 'users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }