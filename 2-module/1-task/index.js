function sumSalary(salaries) {
  //  суммирование зарплаты с проверкой  
  let sum = 0;
  for (let key in salaries) {
    if (isFinite (salaries[key]) && typeof salaries[key] == 'number') {
      sum += salaries[key];
    } 
  }
return (sum)  
}
