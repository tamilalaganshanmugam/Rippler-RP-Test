import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gridInfo } from '../models/grid-info';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private RootUrl = 'http://165.232.44.99/';

  constructor(private http: HttpClient) { }

  getGridInfo(): Observable<any> {
    return this.http.get<any>(`${this.RootUrl}api/dress/demo/list`);
  }
}
