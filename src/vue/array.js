import { ARR_METHODS } from './config.js'
import observeArr from './observeArr.js'

const originArrMethods = Array.prototype;
const arrMethods = Object.create(originArrMethods);

function getNewArr(m, args) {
  switch (m) {
    case 'push':
      getNewArr = () => args;
      break;
    case 'unshift':
      getNewArr = () => args;
      break;
    case 'splice':
      getNewArr = () => args.slice(2)
      break;
    default:
      getNewArr = () => []
      break
  }
  return getNewArr()
}

ARR_METHODS.map(function (m) {
  arrMethods[m] = function () {
    let args = [].slice.call(arguments);
    let rt = originArrMethods[m].apply(this, args);

    let newArr = getNewArr(m, args)
    newArr && observeArr(newArr)
    return rt;
  }
})

export {
  arrMethods
}
