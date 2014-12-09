var bind = require('./index');
var tape = require('tape');

var person = {
  name: 'foo',
  sayHi: function (greeting, options) {
    greeting = greeting || 'hi';
    options = options || {};

    var result = greeting + ' my name is ' + this.name;
    if (options.allCaps) {
      result = result.toUpperCase();
    }
    return result;
  }
};

tape('Example usage', function (t) {
  var func;

  func = bind(person, 'sayHi');
  t.equal(
    func(),
    'hi my name is foo',
    'Function is bound to context');

  func = bind(person, 'sayHi', 'hello');
  t.equal(
    func({ allCaps: true }),
    'HELLO MY NAME IS FOO',
    'Function can be bound with default args');

  t.end();
});
