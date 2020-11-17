import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KpiService {
  username: string;
  constructor(private httpclient: HttpClient) {
    this.username = 'Jmbaya';
  }

  getKpis(): Observable<any> {
    return this.httpclient.get(
      'https://ke-app-call-center-backend.herokuapp.com/agents/' + this.username
    );
  }
}
