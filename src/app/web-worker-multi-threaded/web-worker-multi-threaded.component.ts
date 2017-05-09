import { Component, OnInit, ViewChild, Injector, OnDestroy } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { Subscription } from "rxjs/Rx";
import { GraphInfoService } from "app/graph-info.service";
import { FibonacciService } from "app/fibonacci.service";
import { ChartConstants } from "ChartConstants";

@Component({
  selector: 'app-web-worker-multi-threaded',
  templateUrl: './web-worker-multi-threaded.component.html',
  styleUrls: ['./web-worker-multi-threaded.component.css']
})
export class WebWorkerMultiThreadedComponent implements OnInit, OnDestroy {
  private seriesData: Subscription;
  counter: number = 1;
  public worker: Worker;
  objectValue: string = '';
  objectValueFromMessageBus: string = '';
  fibOf: number = 1;
  fibVal: Array<number> = [];

  ngOnDestroy(): void {
    this.seriesData.unsubscribe();
  }

  constructor(private _injector: Injector, private _graphInfoService: GraphInfoService, private _fibonacciService: FibonacciService) {
    this.worker = this._injector.get('worker');
  }

  ngOnInit() {

    this.seriesData = this._graphInfoService.randomizeObservable(this.lineChartData).subscribe(res => {
      this.lineChartData = res;
    });

    this.worker.onmessage = (e) => {
      console.log('Inside UI Thread : data received' + e.data);
      if (this.HandelMessage(e)) {
        return;
      }
      this.objectValue = JSON.stringify(e.data);
    }
  }

  private HandelMessage(e): Boolean {
    if (Array.isArray(e.data)) {
      if (e.data[0].channel === 'FACTORIAL') {
        this.objectValueFromMessageBus = JSON.stringify(e.data);
        return true;
      }
    }
    return false;
  }

  // lineChart
  public lineChartData: Array<any> = ChartConstants.lineChartData;
  public lineChartLabels: Array<any> = ChartConstants.lineChartLabels;
  public lineChartOptions: any = ChartConstants.lineChartOptions;
  public lineChartColors: Array<any> = ChartConstants.lineChartColors;
  public lineChartLegend: boolean = ChartConstants.lineChartLegend;
  public lineChartType: string = ChartConstants.lineChartType;

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public startCounter(e: any): void {
    console.log('Button Clicked On UI');
    this.worker.postMessage('startCounter');
  }

  public startMessageBusInteraction(e: any): void {
    console.log('Button Clicked On UI to start message bus');
    this.worker.postMessage({ channel: 'FACTORIAL', message: this.lineChartData });
  }

  public calculateFib(e: any): void {
    for (let i = 0; i <= 5; i++) {
      this._fibonacciService.calculate(this.fibOf + i).promise.then((fib) => {
        this.fibVal.push(fib);
        console.log(this.fibVal);
      });
    }
  }
}
