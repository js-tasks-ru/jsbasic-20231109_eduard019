/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // проверка на отсутствие пробелов в имени и чтобы длина имени была >= 4
  if(name == null) {
    
    return false

} else {
  if( name.indexOf(' ') === -1 && name.length >= 4 ) {
    
    return true

}
    else {
      return false
    } 
}
  
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}


