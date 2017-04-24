import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class GraphInfoService {
  private data: Observable<any>;
  constructor() { }

  public randomize(lineChartData: Array<any>): Array<any> {
    let _lineChartData: Array<any> = new Array(lineChartData.length);
    for (let i = 0; i < lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(lineChartData[i].data.length), label: lineChartData[i].label };
      for (let j = 0; j < lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    return _lineChartData;
  }

  public randomizeObservable(lineChartData: Array<any>): Observable<any> {
    this.data = Observable.interval(1000).flatMap(() => {
      return this.randomize(lineChartData);
    });
    return this.data;
  }
}
