const func1 = function (str) {
  return str;
};
console.log(func1("this is func1"));

const func2 = (str) => str;

console.log(func2("this is func2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};

console.log(func3(10, 2));
