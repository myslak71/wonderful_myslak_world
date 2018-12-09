import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from '../env';
import {Cloth} from './cloth.model';

@Injectable()
export class ClothesApiService{

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

// GET list of public, future events
  getClothes(): Observable<any> {
    return this.http
      .get(`${API_URL}/clothes`)
      .catch(ClothesApiService._handleError);
  }
}
