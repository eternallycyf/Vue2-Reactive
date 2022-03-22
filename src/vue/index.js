import { initState } from './init.js'

class Vue {
  constructor(options) {
    this._init(options);
  }

  _init(options) {
    const vm = this;
    vm.$options = options;

    initState(vm);
  }
}

export default Vue;
