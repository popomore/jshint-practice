'use strict';

(function test() {
  var x;

  if (true) {
    x = 0;
  }

  x += 1;
})();

// Bad
(function test() {
  if (true) {
    var x = 0;
    x += 1;
  }

  x += 1;
})();
