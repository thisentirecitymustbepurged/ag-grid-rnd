// Object.defineProperty(Function.prototype, 'bindArgs', {
//   get() {
//     return this.bind
//   }
// })

Function.prototype.bindArgs = function (...args) {
  return this.bind(null, ...args)
}

export {}
