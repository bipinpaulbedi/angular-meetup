import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundWorkerComponent } from "app/background-worker/background-worker.component";
import { WorkerAppModule } from '@angular/platform-webworker';
import { GraphInfoService } from "app/graph-info.service";

@NgModule({
  imports: [
    CommonModule,
    WorkerAppModule
  ],
  providers: [GraphInfoService],
  declarations: [BackgroundWorkerComponent],
  bootstrap: [BackgroundWorkerComponent]
})
export class WorkerModule { }