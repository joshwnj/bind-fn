bind-fn
====

Very small module to making binding functions easier.

Eg. instead of repeating the context in

```js
var f = obj.func.bind(obj);
```

we can just do

```js
var bind = require('bind-fn');
var f = bind(obj, 'func');
```
