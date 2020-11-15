import { KpiService } from './../services/kpi.service';
import { Component, OnInit } from '@angular/core';
import { Kpis } from '../classes/kpis';

@Component({
  selector: 'app-kpis',
  templateUrl: './kpis.component.html',
  styleUrls: ['./kpis.component.css'],
})
export class KpisComponent implements OnInit {
  kpis: Kpis;
  constructor(private _kpiservice: KpiService) {}

  ngOnInit() {
    this._kpiservice.getKpis().subscribe((data) => {
      this.kpis = data;
    });
  }
}
