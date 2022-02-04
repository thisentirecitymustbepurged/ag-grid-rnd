Function.prototype.bindArgs = function (...args) {
  return this.bind(null, ...args)
}
