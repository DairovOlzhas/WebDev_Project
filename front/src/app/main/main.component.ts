import { Component, OnInit } from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {Category, Restaurant, FoodItem, Menu} from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private provider: ApiService) { }

  public menuTitles: Category[];

  public item: FoodItem;
  public category: Category;
  ngOnInit() {
  }

  getCategories(){
    this.provider.getMenuTitles().then(res => {
      this.menuTitles = res;
    });
  }

  createCategory(){
    this.provider.createMenuTitle().then(res => {
      this.getCategories();
    });
  }



  getCategoty(category: Category){
    this.provider.getMenuTitle(category).then( res => {
      this.category = res;
    });
  }
  updateCategory(category: Category){
    this.provider.updateMenuTitle(category).then( res => {
      this.getCategories();
    });
  }

  deleteTitle(category: Category) {
    this.provider.deleteMenuTitle(category).then( res => {
      this.getCategories();
    });
  }


}
