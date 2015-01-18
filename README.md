# jshint 最佳实践

## 使用说明

配置 package.json

```
{
  "name": "jshint-practice"
  "devDependencies": {
    "jshint": "*"
  },
  "scripts": {
    "jshint": "jshint ."
  }
}
```

添加 .jshintrc 配置规则(规则如下)，添加 .jshintignore 忽略某些目录(配置文件比命令行好用)。

运行校验代码

```
npm install
npm jshint
```

## 行内配置

有时某些代码希望覆盖全局配置，那么行内配置会帮到你。

```
/* jshint unused:true, eqnull:true */
function main(a, b) {
  return a == null;
}
```

使用全局变量

```
/* global document */
document.createElement()
```

## 配置说明

## indent

```
{
  "indent": 2
}
```

配置缩进，建议用两个或四个空格代替 tab，tab 唯一的缺点也是优点：编辑器可以自己配置显示的缩进，但不是每个人都会配置，比如 github 上的显示。

我使用两个空格，不然多层缩进很容易到达80个字符，一行看不完。

## latedef

```
{
  "latedef": "nofunc"
}
```

变量在使用前必须先声明，废弃的变量要及时清理掉

配置 `nofunc` 可让函数定义在使用下方，因为变量提升。

```
defLate();
function defLate() {}
```

## newcap

```
{
  "newcap": true
}
```

`new` 之后的需要首字母大写

```
// Good
new Object();

// Bad
new object();
```

## curly

```
{
  "curly": false
}
```

语句块必须使用大括号包裹，**但有时候单行我不喜欢写 {} 所以设成 false**

```
// Good
if (true) {
  console.log(true);
}

// Bad
if (true) console.log(true);
```

## eqeqeq

```
{
  "eqeqeq": true
}
```

使用恒等(`===`)判断

https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/

```
// Good
'' === 0;

// Bad
'' == 0
```

## eqnull

```
{
  "eqnull": true
}
```

当你想判断某个值等于 `null` 或 `undefined` 时非常实用，`== null` 会忽略 `eqeqeq` 的警告

## strict

```
{
  "strict": true
}
```

进入 strict mode，文件开头添加 `"use strict;"`，原因可看下面的链接

http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/

## undef

```
{
  "undef": true
}
```

如使用未定义的变量会报错，但如果使用的是全局变量可以使用 global

```
a(); // 报错

/* global location */
location.href = 'http://github.com';
```

## unused

```
{
  "unused": true
}
```

如果变量定义但未使用会报错，便于优化代码，尤其在 node 中可以删除很多无用的依赖。

## laxbreak


```
{
  "laxbreak": true
}
```


  
## laxcomma

```
{
  "laxcomma": false
}
```

在行尾使用逗号，而非行首

```
// Good
{
  "name": "jshint-practice",
  "version": "1.0.0"
}

// Bad
{
    "name": "jshint-practice"
  , "version": "1.0.0"
}
```


## asi

```
{
  "asi": false
}
```

必须使用分号

## boss

```
{
  "boss": true
}
```

允许判断中赋值

```
// Good
if (foo = bar) {}
```

## expr

```
{
  "expr": true
}
```

支持表达式直接运行

```
// Good
options || (options = {})
```

## sub

```
{
  "sub": true
}
```

同时支持 `hash['key']` 和 `hash.key`

## quotmark

```
{
  "quotmark": "single",
}
```

引号保持一致，单双都可，也可以单独设置
  
## loopfunc

```
{
  "loopfunc": true,
}
```

  // 循环中函数的 bug
  "loopfunc": true,

## lastsemic

  "lastsemic": true,



## funcscope

  "funcscope": true,



## esnext

## noyield

## env

会根据不同的环境提前定义一些[环境变量](http://jshint.com/docs/options/#environments) 

- node: process, …
- browser: document, navigator, …
- nonstandard: escape, unescape, …
- devel: console, alert, …
- jquery: $, …
- mocha: describe, it, …

## global

定义一些 env 中没有的全局变量

```
{
  "globals": {
    "define": false
  }
}
```


