import { Injectable } from '@angular/core';

@Injectable()
export class GraphInfoService {

  constructor() { }

  public randomize(lineChartData : Array<any>): Array<any> {
    let _lineChartData:Array<any> = new Array(lineChartData.length);
    for (let i = 0; i < lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(lineChartData[i].data.length), label: lineChartData[i].label};
      for (let j = 0; j < lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    return _lineChartData;
  }
}
