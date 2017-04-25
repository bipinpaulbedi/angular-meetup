import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundWorkerComponent } from "app/background-worker/background-worker.component";
import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackgroundWorkerComponent],
  bootstrap: [BackgroundWorkerComponent]
})
export class WorkerModule { }