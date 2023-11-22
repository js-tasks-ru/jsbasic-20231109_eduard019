function filterRange(arr, a, b) {
  // фильтрация элементов массива
  return arr.filter(item => (a <= item && item <= b));
}
