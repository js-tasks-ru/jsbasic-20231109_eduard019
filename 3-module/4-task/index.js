function showSalary(users, age) {
  
  let filteredUsers = users.filter(user => user.age <= age); // Фильтруем пользователей по возрасту
  let result = filteredUsers.map(user => `${user.name}, ${user.balance}`); // Преобразуем отфильтрованных пользователей в строку имени и баланса
  return result.join('\n'); // Объединяем строки, разделяя их переводом строки
}
