import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';
import { UserActivity } from 'src/app/model/UserActivity'
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  links = {};
  public readonly UserActivity = UserActivity;

  searchForm = this.formBuilder.group({
    username: ''
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(data => {
      this.users = data._embedded.users;
      this.links = data._links;
    });
  }

  searchByUsername() {
    const prefix = this.searchForm.value.username;
    this.userService.usersByUsername$(prefix).subscribe(data => {
      this.users = data._embedded.users;
      this.links = data._links;
    });
  }

}

