import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { GraphInfoService } from "app/graph-info.service";
import { DynamicWebWorkersComponent } from './dynamic-web-workers/dynamic-web-workers.component';
import { WebWorkerMultiThreadedComponent } from './web-worker-multi-threaded/web-worker-multi-threaded.component';

@NgModule({
  declarations: [
    AppComponent,
    WebWorkerComponent,
    DynamicWebWorkersComponent,
    WebWorkerMultiThreadedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [GraphInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
