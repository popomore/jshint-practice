'use strict';

// Bad
var nums = [];

for (var i = 0; i < 10; i++) {
  nums[i] = function (j) {
    return i + j;
  };
}

nums[0](2); // Prints 12 instead of 2

// Worked, but also Bad
var nums = [];

for (var i = 0; i < 10; i++) {
  (function (i) {
    nums[i] = function (j) {
        return i + j;
    };
  }(i));
}

// Good
var nums = [];

for (var i = 0; i < 10; i++) {
  nums[i] = createFunc(i);
}

function createFunc(i) {
  return function (j) {
    return i + j;
  };
}
