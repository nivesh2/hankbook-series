
###traversing an array in JavaScript

```js
var student = ['Harry','Bill','Mark','Steve','Jhon'];
```

below are 3 loops, but we prefer map and reduce
i is defined in block scope. So, one cann't access them outside loop.

```js
for(let i = 0; i < student.length; i++){
  console.log(student[i]);
}

for (const i in student) {
  console.log(student[i]);
}

for (const i of student) {
  console.log(i);
}
```

Don't use iterators. Prefer JavaScript's higher-order functions like map() and reduce()
instead of loops like for-of. eslint: no-iterator

```js
student.map(function(value,index,array){
  console.log(value);
});

student.reduce(function(preValue,value,index,array){
  console.log(value);
},0);
```
