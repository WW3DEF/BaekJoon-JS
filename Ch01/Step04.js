// 두 정수 A와 B를 입력받은 다음, A×B를 출력
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*b);