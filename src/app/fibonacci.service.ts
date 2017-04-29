import { Injectable } from '@angular/core';
import { WebWorkerService } from "app/webWorker";
import { Result } from "app/result";

@Injectable()
export class FibonacciService extends WebWorkerService {

  constructor() {
    super();
  }

  public calculate(n: number): { result: Result, promise: Promise<number> } {
    let promise = this.run(this.fib, n);

    promise.then((response) => {
      result.result = response;
      result.loading = false;
    });

    let result = new Result(n, 0, true);
    return { result: result, promise: promise };
  }

  public calculateWithoutWorker(n: number): number {
    return this.fib(n);
  }

  private fib(n: number) {
    let fib = (n: number): number => {
      if (n < 2) return 1;
      return fib(n - 1) + fib(n - 2);
    };

    return fib(n);
  }
}
