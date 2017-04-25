import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { GraphInfoService } from "app/graph-info.service";
import { DynamicWebWorkersComponent } from './dynamic-web-workers/dynamic-web-workers.component';
import { WebWorkerMultiThreadedComponent } from './web-worker-multi-threaded/web-worker-multi-threaded.component';
import { WorkerAppModule } from '@angular/platform-webworker';

@NgModule({
  declarations: [
    AppComponent,
    WebWorkerComponent,
    DynamicWebWorkersComponent,
    WebWorkerMultiThreadedComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [GraphInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
