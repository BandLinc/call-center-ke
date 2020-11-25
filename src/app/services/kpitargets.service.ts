import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KpitargetsService {
  constructor(private httpclient: HttpClient) {}

  getKpiTargets(): Observable<any> {
    return this.httpclient.get(
      'https://ke-app-call-center-backend.herokuapp.com/dailytargets/'
    );
  }
}
