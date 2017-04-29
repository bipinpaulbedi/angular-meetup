import { Component } from '@angular/core';
import { WebWorkerComponent } from "app/web-worker/web-worker.component";
import { WebWorkerMultiThreadedComponent } from "app/web-worker-multi-threaded/web-worker-multi-threaded.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backGroundWorker: Worker;
  componentData = null;
  title = 'Angular Rocks!!!';
  graphs = 1;
  generateDistinct = false;
  backgroudWorkers: Array<Worker> = []
  constructor() {
    this.backGroundWorker = new Worker('webworker.bundle.js');
    this.backgroudWorkers.push(this.backGroundWorker);

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('serviceWorker.bundle.js');
    }
  }

  public generateComponent(): void {
    if (this.componentData == null) {
      this.componentData = []
    }
    for (var i = 0; i < this.graphs; i++) {
      this.componentData.push({
        component: WebWorkerComponent,
        inputs: {
          default: true
        }
      });
    }
  };

  public generateComponentMutiThreaded(): void {
    if (this.componentData == null) {
      this.componentData = []
    }
    for (var i = 0; i < this.graphs; i++) {
      let worker: Worker = this.generateDistinct ? this.getWorker() : this.backGroundWorker;
      this.componentData.push({
        component: WebWorkerMultiThreadedComponent,
        inputs: {
          worker: worker
        }
      });
    }
  };

  public terminateWorkers(): void {
    while (this.backgroudWorkers.length > 0) {
      let worker: Worker = this.backgroudWorkers.pop();
      worker.terminate();
    }
  }

  private getWorker(): Worker {
    let newWorker: Worker = new Worker('webworker.bundle.js')
    this.backgroudWorkers.push(newWorker);
    return newWorker;
  }

  public sendPing() {
    this.sendMessage('ping').then((reply) => {
      console.log(reply);
    }).catch((er) => { console.log(er); })
  }

  private sendMessage(message) {
    return new Promise(function (resolve, reject) {
      var messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = (event) => {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };
      navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
    });
  }
}
