bind-fn
====

[![Build Status](https://secure.travis-ci.org/joshwnj/bind-fn.png)](http://travis-ci.org/joshwnj/bind-fn)

Very small module to make binding functions easier.

Eg. instead of repeating the context in

```js
var f = obj.func.bind(obj);
```

we can just do

```js
var bind = require('bind-fn');
var f = bind(obj, 'func');
```
