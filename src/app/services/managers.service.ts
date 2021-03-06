import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManagersService {
  constructor(private httpclient: HttpClient) {}

  getManagers(): Observable<any> {
    return this.httpclient.get(
      'https://ke-app-call-center-backend.herokuapp.com/managers/'
    );
  }
}
