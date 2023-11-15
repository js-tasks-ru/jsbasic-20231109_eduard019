function ucFirst(str) {
  // замена первого символа на верхний регистр
   if (!str) return str;
  let Nstr = str[0].toUpperCase() + str.slice(1);
  return Nstr
}
console.log (ucFirst(''))