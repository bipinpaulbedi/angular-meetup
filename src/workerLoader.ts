import 'polyfills.ts';
import '@angular/core';
import '@angular/common';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';
import { WorkerModule } from "app/worker/worker.module";

platformWorkerAppDynamic().bootstrapModule(WorkerModule);

onmessage = (e) => {
    let number: number = Math.floor((Math.random() * 10) + 1);
    let counter: number = 1;
    for (var i = 0; i < 10000; i++) {
        console.log('ID : ' + number + 'Counter : ' + counter++)
    }
}
