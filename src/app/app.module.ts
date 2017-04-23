import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { WebWorkerComponent } from './web-worker/web-worker.component';
import { GraphInfoService } from "app/graph-info.service";
import { DynamicWebWorkersComponent } from './dynamic-web-workers/dynamic-web-workers.component';
import { WebWorkerWithBackgroundSupportComponent } from './web-worker-with-background-support/web-worker-with-background-support.component';

@NgModule({
  declarations: [
    AppComponent,
    WebWorkerComponent,
    DynamicWebWorkersComponent,
    WebWorkerWithBackgroundSupportComponent
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
