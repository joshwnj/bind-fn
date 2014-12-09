module.exports = function bind (obj, func) {
  var f = (typeof func === 'string') ? obj[func] : func;
  var args = [].slice.call(arguments, 2);
  args.unshift(obj);
  return Function.prototype.bind.apply(f, args);
};
