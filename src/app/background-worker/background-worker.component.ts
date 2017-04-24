import { Component, OnInit } from '@angular/core';
import { GraphInfoService } from "app/graph-info.service";
const ANGULAR_MEETUP_CHANNEL = "ANGULAR_MEETUP_CHANNEL";

@Component({
  selector: 'app-background-worker',
  templateUrl: './background-worker.component.html',
  styleUrls: ['./background-worker.component.css']
})
export class BackgroundWorkerComponent implements OnInit {

  constructor(private _graphInfoService: GraphInfoService) {
  }

  ngOnInit() {
  }

  private returnRandomObject(lineChartData: Array<any>) {
    this._graphInfoService.randomizeObservable(lineChartData).subscribe(res => {
      return res;
    });
  }

}
