function makeDiagonalRed(table) {
  // раскраска ячеек в таблице по диагонали
  
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }
}
