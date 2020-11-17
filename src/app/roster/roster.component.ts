import { Rosters } from './../classes/rosters';
import { HttpClient } from '@angular/common/http';
import { RosterService } from './../services/roster.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
})
export class RosterComponent implements OnInit {
  lstRosters: Rosters[];
  constructor(private _dutyroster: RosterService) {}

  ngOnInit() {
    this._dutyroster.getRoster().subscribe((data) => {
      this.lstRosters = data;
    });
  }
}
