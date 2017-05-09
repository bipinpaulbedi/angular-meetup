import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraphInfoService } from "app/graph-info.service";
import { Subscription } from "rxjs/Rx";
import { FibonacciService } from "app/fibonacci.service";
import { ChartConstants } from "ChartConstants";

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit, OnDestroy {
  private seriesData: Subscription;
  counter: number = 1;
  fibOf: number = 1;
  fibVal: Array<number> = [];

  constructor(private _graphInfoService: GraphInfoService, private _fibonacciService: FibonacciService) { }

  ngOnInit() {
    this.seriesData = this._graphInfoService.randomizeObservable(this.lineChartData).subscribe(res => {
      this.lineChartData = res;
    });
  }

  ngOnDestroy(): void {
    this.seriesData.unsubscribe();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public startCounter(e: any): void {
    console.log('Button Clicked On UI');
    for (var i = 0; i < 10000; i++) {
      console.log(this.counter++)
    }
  }

  public calculateFib(e: any): void {
    for (let i = 0; i <= 5; i++) {
      this.fibVal.push(this._fibonacciService.calculateWithoutWorker(this.fibOf + i));
      console.log(this.fibVal);
    }
  }

  // lineChart
  public lineChartData: Array<any> = ChartConstants.lineChartData;
  public lineChartLabels: Array<any> = ChartConstants.lineChartLabels;
  public lineChartOptions: any = ChartConstants.lineChartOptions;
  public lineChartColors: Array<any> = ChartConstants.lineChartColors;
  public lineChartLegend: boolean = ChartConstants.lineChartLegend;
  public lineChartType: string = ChartConstants.lineChartType;


}
