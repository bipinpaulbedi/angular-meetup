import { Component } from '@angular/core';
import { WebWorkerComponent } from "app/web-worker/web-worker.component";

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
}
