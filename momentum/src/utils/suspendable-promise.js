export class SuspendablePromise extends Promise {
  toSuspender() {
    let done = false;
    let error = false;
    let result = null;
    const suspender = this.then(data => (result = data))
      .catch(e => {
        result = e;
        error = true;
      })
      .finally(() => (done = true));
    return {
      read() {
        if (error) {
          throw result;
        }
        if (done) {
          return result;
        }
        throw suspender;
      },
    };
  }

  static fromPromise(promise) {
    return new SuspendablePromise((resolve, reject) => promise.then(resolve).catch(reject));
  }
}
