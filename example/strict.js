'use strict';

// Bad
(function(){
  foo = 'bar';
})();

// Bad
eval('var a = false;');
print( typeof a );

// Bad
(function() {
  arguments = '';
})();

// Bad
(function(foo, foo) {
  console.log(foo);
})();

// Bad
with(o){}

