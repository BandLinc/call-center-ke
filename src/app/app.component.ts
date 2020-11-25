import { NavService } from './services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn: Boolean = false;
  title = 'Call Center Dashboard';

  constructor(private _navService: NavService) {}

  ngOnInit() {
    this.isLoggedIn = this._navService.checkUserIsLoggedIn();
    this._navService.loginValue$.subscribe((message) => {
      this.isLoggedIn = message;
    });
  }
}
