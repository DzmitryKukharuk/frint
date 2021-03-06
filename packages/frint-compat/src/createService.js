/* eslint-disable no-console */
import _ from 'lodash';

export default function createService(extend = {}) {
  console.warn('[DEPRECATED] `createService` has been deprecated. Use `createClass` or direct ES6 classes instead.');

  class Service {
    constructor(options = {}) {
      if (!options.app) {
        throw new Error('App instance not provided.');
      }

      this.app = options.app;

      _.merge(this, extend);

      Object.keys(this)
        .filter(prop => (this[prop] instanceof Function))
        .forEach((prop) => { this[prop] = this[prop].bind(this); });

      if (typeof this.initialize === 'function') {
        this.initialize(options);
      }
    }
  }

  return Service;
}
