var foo, bar = 1;

// Good
foo = bar;
if (foo) {
  console.log(foo);
}

// Bad
if (foo = bar) {
  console.log(foo);
}
