import { Component } from '@angular/core';
import { WebWorkerComponent } from "app/web-worker/web-worker.component";
import { WebWorkerWithBackgroundSupportComponent } from "app/web-worker-with-background-support/web-worker-with-background-support.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  graphs = 1;
  componentData = null;
  title = 'Angular Rocks!!!';
  constructor() {
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

    public generateComponentWithBackgroundSupport(): void {
    if (this.componentData == null) {
      this.componentData = []
    }

    for (var i = 0; i < this.graphs; i++) {
      this.componentData.push({
        component: WebWorkerWithBackgroundSupportComponent,
        inputs: {
          default: true
        }
      });
    }
  };
}
