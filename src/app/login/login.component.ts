import { NavService } from './../services/nav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _navService: NavService, private router: Router) {}

  ngOnInit(): void {}

  public userIsLoggedIn() {
    this._navService.setUserToLoggedIn();
  }

  loginUser(e) {
    e.preventDefault();
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username, password);

    if (
      username == 'llidanya@safaricom.co.ke' ||
      username == 'cnafayo@safaricom.co.ke' ||
      username == 'sgichuru@safaricom.co.ke' ||
      username == 'pmbugua@safaricom.co.ke'
    ) {
      this._navService.setLoginValue(true);
      this.router.navigate(['kpis']);
    }
  }
}
