import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { GraphInfoService } from "app/graph-info.service";
import { Subscription } from "rxjs/Rx";
import { ChartConstants } from "ChartConstants";

@Component({
  selector: 'app-background-worker',
  templateUrl: './background-worker.component.html',
  styleUrls: ['./background-worker.component.css']
})
export class BackgroundWorkerComponent implements OnInit, OnDestroy {
  private seriesData: Subscription;
  private receiveMessage: any;
  private counter: number = 1;

  constructor(private _graphInfoService: GraphInfoService) {

  }

  ngOnInit() {
    this.seriesData = this._graphInfoService.randomizeObservable(this.lineChartData).subscribe(res => {
      console.log('Inside Web Worker : About to send data to UI' + this.counter++);
      postMessage.apply(null, [res]);
    });
  }

  ngOnDestroy(): void {
    this.seriesData.unsubscribe();
  }

  public lineChartData: Array<any> = ChartConstants.lineChartData;

}
