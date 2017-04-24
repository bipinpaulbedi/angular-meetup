import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { WorkerModule } from "app/worker/worker.module";

const ANGULAR_MEETUP_CHANNEL = "ANGULAR_MEETUP_CHANNEL";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//platformWorkerAppDynamic().bootstrapModule(WorkerModule);
