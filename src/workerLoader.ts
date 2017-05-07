import 'polyfills.ts';
import '@angular/core';
import '@angular/common';

import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';
import { WorkerModule } from "app/worker/worker.module";
import { GraphInfoMBService } from "app/graph-info-mb.service";

let dataComponent: GraphInfoMBService;

platformWorkerAppDynamic().bootstrapModule(WorkerModule).then((ref: any) => {
    dataComponent = ref.injector.get(GraphInfoMBService);
}).catch((er) => {
    console.log(er);
})

onmessage = (e) => {

    if (HandelMessage(e)) {
        return;
    }

    let number: number = Math.floor((Math.random() * 10) + 1);
    let counter: number = 1;
    for (var i = 0; i < 10000; i++) {
        console.log('ID : ' + number + 'Counter : ' + counter++)
    }
}

let HandelMessage = (e): Boolean => {
    if (dataComponent) {
        if (e.data.channel === "FACTORIAL") {
            console.log(e.data);
            dataComponent.randomizeObservable(e.data.message);
            return true;
        }
    }
    return false;
}