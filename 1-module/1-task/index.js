function factorial(n) {
  // функция вычисления факториала
if (n ==0 || n == 1) {
  return 1
}
else { let f = 1
  for (let i = 2; i <= n; i++) {
     f = f * i;
  }
   return (f)
}
}
console.log(factorial (5))