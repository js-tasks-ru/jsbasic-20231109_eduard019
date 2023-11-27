function highlight(table) {
  // выделение ячеек/строк стилем по условиям
  const rows = table.getElementsByTagName('tr');

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];

        if (cell.getAttribute('data-available') === 'true') {
            rows[i].classList.add('available');
        } else if (cell.getAttribute('data-available') === 'false') {
            rows[i].classList.add('unavailable');
        }

        if (cell.innerText === 'm') {
            rows[i].classList.add('male');
        } else if (cell.innerText === 'f') {
            rows[i].classList.add('female');
        }

        if (j === 1 && parseInt(cell.innerText, 10) < 18) {
            rows[i].style.textDecoration = 'line-through';
        } 
    } 

    if (!cells[3].hasAttribute('data-available')) {
        rows[i].setAttribute('hidden', true);
    }
 }
}


