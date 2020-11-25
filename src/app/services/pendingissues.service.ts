import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PendingissuesService {
  constructor(private httpclient: HttpClient) {}

  getPendingIssues(): Observable<any> {
    return this.httpclient.get(
      'https://ke-app-call-center-backend.herokuapp.com/pendingissues/'
    );
  }
}
