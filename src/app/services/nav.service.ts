import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public isLoggedIn: boolean = false;

  private _loginValue = new Subject<Boolean>();
  loginValue$ = this._loginValue.asObservable();

  setLoginValue(value: boolean) {
    this._loginValue.next(value);
  }

  public checkUserIsLoggedIn() {
    return this.isLoggedIn;
  }

  public setUserToLoggedIn() {
    this.isLoggedIn = true;
  }
  public setUserToLoggedOut() {
    this.isLoggedIn = false;
  }
}
