var str = 'asadsada',
  str2 = '',
  obj = { 1: 0 },
  bool = true,
  num = 1;

document.getElementById('p1').innerText += 'str:'+ typeof str + 'obj:' + typeof obj + 'bool:' + typeof bool + 'num:' + typeof num

document.getElementById('p2').innerText += Boolean(str) + '和' + Boolean(str2)

const p3 = document.getElementById('p3')
for (var propertyName in window) {
  p3.innerText += propertyName + ', '
}

const p4 = document.getElementById('p4')
function example(param1, param2) {
  for (let i = 0; i < arguments.length; i++) {
    p4.innerText += arguments[i] + ', '
  }
}
example('first', 'second', 'third', 'fourth', 'fifth', 'sixth')

const p5 = document.getElementById('p5')
const list = [1,2,3,4,5,6,7,8,9]
const listReduce = list.reduce(function(prev, cur, index, array) {
  return prev + cur
})

p5.innerText += listReduce