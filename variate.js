var num = 1;
var obj = new Object()

var num2 = num;
var obj2 = obj;

num2 += 1
obj2.name = 'jack'
console.log('num', num, 'num2', num2);
console.log('obj', obj, 'obj2', obj2);

console.log('obj2 instanceof Object: ', obj2 instanceof Object);