import Vue from './vue/index.js'

const vm = new Vue({
  el: '#app',
  data() {
    return {
      title: '数据劫持',
      className: 1,
      nameList: ['张三', '李四'],
      info: {
        a: {
          b: 1
        }
      },
      arr: [
        {
          id: 1,
          name: 'zs'
        },
        {
          id: 2,
          name: 'ls'
        }
      ]
    }
  }
})

// 1. 数据劫持 vm.xxx 直接劫持到 data下面进行获取
// console.log(vm.title);
// console.log(vm._data.title);

// 2. 数据劫持 修改vm.xxx 直接劫持到 data下面进行修改
// vm.title = 'reactive title'
// console.log(vm._data);

// 3. 触发对象深层结构的 getter setter 每一个数据层级都有一个 getter setter
// console.log(vm.info.a);
// console.log(vm._data)

// 4. 获取整个数组触发 getter, 获取数组下标不触发 getter
vm.arr.reverse()
vm.arr.push({ title: '测试', city: "hangzhou" })
console.log(vm.arr);
