import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RosterService {
  constructor(private httpclient: HttpClient) {}

  getRoster(): Observable<any> {
    return this.httpclient.get(
      'https://ke-app-call-center-backend.herokuapp.com/dutyroster/'
    );
  }
}
