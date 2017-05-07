import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundWorkerComponent } from "app/background-worker/background-worker.component";
import { WorkerAppModule } from '@angular/platform-webworker';
import { GraphInfoService } from "app/graph-info.service";
import { GraphInfoMBService } from "app/graph-info-mb.service";

@NgModule({
  imports: [
    CommonModule,
    WorkerAppModule
  ],
  providers: [GraphInfoService, GraphInfoMBService],
  declarations: [BackgroundWorkerComponent],
  bootstrap: [BackgroundWorkerComponent]
})
export class WorkerModule { }