import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Params } from '@angular/router';
import { Page, RepositoryLinks } from 'src/app/model/Utils';
import { Dish } from 'src/app/model/dish';
import { DishService } from 'src/app/service/dish-service.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent {

  dishes!: Dish[];
  links!: RepositoryLinks;
  page!: Page;

  searchForm = this.formBuilder.group({
    name: ''
  })
  totalItems: string | number | undefined;

  constructor(private dishService: DishService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dishService.dishes$().subscribe((res: any) => {
      this.dishes = res._embedded.dishes;
      this.links = res._links;
      this.page = res.page;
    });
  }

  searchByName() {
    const prefix = this.searchForm.value.name ?? '';
    const params: Params = this.getRequestParams();
    this.dishService.dishesByName$(prefix, params).subscribe((res: any) => {
      this.dishes = res._embedded.dishes;
      this.links = res._links;
      this.page = res.page;
    });
  }

  handlePageChange($event: number) {
    this.page.number = $event - 1;
    this.fetchDishes()
  }

  fetchDishes() {
    const params: Params = this.getRequestParams();
    this.dishService.dishes$(params).subscribe((res: any) => {
      this.dishes = res._embedded.dishes;
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
