import { PendingissuesService } from './../services/pendingissues.service';
import { Component, OnInit } from '@angular/core';
import { Pendingissues } from '../classes/pendingissues';

@Component({
  selector: 'app-daily-updates',
  templateUrl: './daily-updates.component.html',
  styleUrls: ['./daily-updates.component.css'],
})
export class DailyUpdatesComponent implements OnInit {
  lstIssues: Pendingissues[];

  constructor(private _pendingIssues: PendingissuesService) {}

  ngOnInit(): void {
    this._pendingIssues.getPendingIssues().subscribe((data) => {
      this.lstIssues = data;
    });
  }
}
