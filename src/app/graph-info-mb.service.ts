import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { MessageBus } from "@angular/platform-webworker";

@Injectable()
export class GraphInfoMBService {
  private data: Observable<any>;
  private channel: string = "FACTORIAL";

  constructor(private messageBus: MessageBus) {
    this.messageBus.initChannel(this.channel, false);
  }

  public randomize(lineChartData: Array<any>): Array<any> {
    let _lineChartData: Array<any> = new Array(lineChartData.length);
    for (let i = 0; i < lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(lineChartData[i].data.length), label: lineChartData[i].label };
      for (let j = 0; j < lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    return [_lineChartData];
  }

  public randomizeObservable(lineChartData: Array<any>): void {
    this.data = Observable.interval(1000).flatMap(() => {
      return this.randomize(lineChartData);

    });

    this.data.subscribe((res) => {
      console.log('Inside Web Worker : About to send data to UI VIA Message Bus');
      this.messageBus.to(this.channel).next(res);
    });
  }
}
