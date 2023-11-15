function truncate(str, maxlength) {
  // код проверяет длину строки, при превышении максимума отсекает лишние символы и добавляет ... 
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'
  }
  else {
    return str
  }
}

