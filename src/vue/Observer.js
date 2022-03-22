import defineReactiveData from './reactive.js'
import { arrMethods } from './array.js'
import observeArr from './observeArr.js'

class Observer {
  constructor(data) {
    if (Array.isArray(data)) {
      data.__proto__ = arrMethods;
      observeArr(data)
    } else {
      this.walk(data);
    }
  }

  walk(data) {
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];

      defineReactiveData(data, key, value);
    }
  }
}

export default Observer
