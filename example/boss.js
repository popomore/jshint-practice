var foo, bar = 1;

// Good
foo = bar;
if (foo) {
  console.log(foo);
}

// Good, but no recommanded
if (foo = bar) {
  console.log(foo);
}
