import observe from './observe.js';

function defineReactiveData(data, key, value) {
  observe(value)

  Object.defineProperty(data, key, {
    get() {
      console.log('#get the reactive data', value);
      return value;
    },
    set(newValue) {
      console.log('#set the reactive data', newValue);
      if (newValue === value) return;
      observe(newValue);
      value = newValue;
    }
  })
}

export default defineReactiveData
