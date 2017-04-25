import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { GraphInfoService } from "app/graph-info.service";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-background-worker',
  templateUrl: './background-worker.component.html',
  styleUrls: ['./background-worker.component.css']
})
export class BackgroundWorkerComponent implements OnInit, OnDestroy {
  private seriesData: Subscription;
  private receiveMessage: any;
  private counter: number = 1;
  
  ngOnDestroy(): void {
    this.seriesData.unsubscribe();
  }

  constructor(private _graphInfoService: GraphInfoService) {
  }

  ngOnInit() {
    this.seriesData = this._graphInfoService.randomizeObservable(this.lineChartData).subscribe(res => {
      console.log('Inside Web Worker : About to send data to UI' + this.counter++);
      postMessage.apply(null, [res]);
    });
  }

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];

}
