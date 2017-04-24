import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundWorkerComponent } from "app/background-worker/background-worker.component";

@NgModule({
  imports: [
    CommonModule,
    BackgroundWorkerComponent
  ],
  declarations: [BackgroundWorkerComponent],
  bootstrap: [BackgroundWorkerComponent]
})
export class WorkerModule { }
