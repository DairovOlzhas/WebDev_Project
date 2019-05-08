import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends MainService{

  constructor(http: HttpClient) {
    super(http);
  }


  getMenuTitles(): Promise<any> {
    return this.get('http://127.0.0.1:8000/api/menu/', {});
  }
  createMenuTitle(): Promise<any> {
    return this.post('http://127.0.0.1:8000/api/menu/', {});
  }


  getMenuTitle(categoty: Category): Promise<Category> {
    return this.get(`http://127.0.0.1:8000/api/menu/${categoty.id}/`, {});
  }

  updateMenuTitle(categoty: Category): Promise<any> {
    return this.put(`http://127.0.0.1:8000/api/menu/${categoty.id}/`, {});
  }
  deleteMenuTitle(categoty: Category): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/menu/${categoty.id}/`, {});
  }



}
