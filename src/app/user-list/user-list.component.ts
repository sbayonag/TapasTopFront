import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  links = {};
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.users$.subscribe(data => {
      this.users = data._embedded.users;
      this.links = data._links;
    });
  }
}

