import { Component, OnInit, ViewChild, Injector, OnDestroy } from '@angular/core';
import { BaseChartDirective } from "ng2-charts";
import { Subscription } from "rxjs/Rx";
import { GraphInfoService } from "app/graph-info.service";
import { FibonacciService } from "app/fibonacci.service";

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
  fibOf: number = 1
  fibVal: number = 1;

  ngOnDestroy(): void {
    this.seriesData.unsubscribe();
  }

  constructor(private _injector: Injector, private _graphInfoService: GraphInfoService, private _fibonacciService: FibonacciService) {
    this.worker = this._injector.get('worker');
  }

  ngOnInit() {
    this.worker.onmessage = (e) => {
      console.log('Inside UI Thread : data received');
      this.objectValue = JSON.stringify(e.data);
      console.log(e.data);
    }

    this.seriesData = this._graphInfoService.randomizeObservable(this.lineChartData).subscribe(res => {
      this.lineChartData = res;
    });
  }

  // lineChart
  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

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

  public calculateFib(e: any): void {
    this._fibonacciService.calculate(this.fibOf).promise.then((fib) => {
      this.fibVal = fib;
    });
  }
}
