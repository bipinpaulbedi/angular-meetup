import { Component, OnInit, ComponentFactoryResolver, ViewChild, ReflectiveInjector, ViewContainerRef, Input } from '@angular/core';
import { WebWorkerComponent } from "app/web-worker/web-worker.component";
import { WebWorkerWithBackgroundSupportComponent } from "app/web-worker-with-background-support/web-worker-with-background-support.component";

@Component({
  selector: 'app-dynamic-web-workers',
  entryComponents: [WebWorkerComponent, WebWorkerWithBackgroundSupportComponent],
  templateUrl: './dynamic-web-workers.component.html',
  styleUrls: ['./dynamic-web-workers.component.css']
})
export class DynamicWebWorkersComponent implements OnInit {
  currentComponent = null;
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  @Input() set componentData(data: Array<{ component: any, inputs: any }>) {
    if (!data) {
      return;
    }
    data.forEach(element => {
      // Inputs need to be in the following format to be resolved properly
      let inputProviders = Object.keys(element.inputs).map((inputName) => { return { provide: inputName, useValue: element.inputs[inputName] }; });
      let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

      // We create an injector out of the data we want to pass down and this components injector
      let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

      // We create a factory out of the component we want to create
      let factory = this.resolver.resolveComponentFactory(element.component);

      // We create the component using the factory and the injector
      let component = factory.create(injector);

      // We insert the component into the dom container
      this.dynamicComponentContainer.insert(component.hostView);

      // Destroy the previously created component
      //if (this.currentComponent) {
      //  this.currentComponent.destroy();
      //}
      this.currentComponent = component;
    });


  }
}
