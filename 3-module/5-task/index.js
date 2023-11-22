function getMinMax(str) {
  
  let numbers = str.match(/[-+]?\d+\.\d+|[-+]?\d+/g); // Находим все числа в строке
  numbers = numbers.map(parseFloat); // Преобразуем строки в числа
  let min = Math.min(...numbers); // Находим минимальное значение
  let max = Math.max(...numbers); // Находим максимальное значение
  return { min, max };
}
