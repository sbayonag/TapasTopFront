import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user-service.service';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserReviewsComponent } from './component/user-reviews/user-reviews.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserTrophiesComponent } from './component/user-trophies/user-trophies.component';
import { DishListComponent } from './component/dish-list/dish-list.component';
import { ReviewListComponent } from './component/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserProfileComponent,
    UserReviewsComponent,
    UserTrophiesComponent,
    DishListComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
