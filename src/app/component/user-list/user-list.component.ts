import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Params } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserActivity } from 'src/app/model/UserActivity';
import { UserService } from 'src/app/service/user-service.service';
import { Page, RepositoryLinks } from '../../model/Utils';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  users!: User[];
  links!: RepositoryLinks;
  page!: Page;
  public readonly UserActivity = UserActivity;

  searchForm = this.formBuilder.group({
    username: ''
  })
totalItems: string|number|undefined;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userService.users$().subscribe((res: any) => {
      this.users = res._embedded.users;
      this.links = res._links;
      this.page = res.page;
    });
  }

  searchByUsername() {
    const prefix = this.searchForm.value.username ?? '';
    const params: Params = this.getRequestParams();
    this.userService.usersByUsername$(prefix, params).subscribe((res: any) => {
      this.users = res._embedded.users;
      this.links = res._links;
      this.page = res.page;
    });
  }

  handlePageChange($event: number) {
    this.page.number = $event - 1;
    this.fetchUsers()
  }

  fetchUsers() {
    const params: Params = this.getRequestParams();
    this.userService.users$(params).subscribe((res: any) => {
      this.users = res._embedded.users;
      this.links = res._links;
      this.page = res.page;
    });
  }

  private getRequestParams(): any {
    let params: Params = {};
    params[`size`] = this.page.size;
    params[`page`] = this.page.number;
    return params;
  }

}