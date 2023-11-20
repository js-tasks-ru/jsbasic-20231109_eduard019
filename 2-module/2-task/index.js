function isEmpty(obj) {
  // проверка на наличие свойств
for (let key in obj) {
  return false
}
return true;
}
