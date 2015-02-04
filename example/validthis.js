'use strict';

// Bad
function a() {
  this.call();
}
a();

// Good
function b() {
  /* jshint validthis:true */
  this.call();
}
b.call(global);

// Bad, but no warning
(function() {
  this.call();
})();
