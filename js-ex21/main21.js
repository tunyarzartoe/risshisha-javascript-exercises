'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('table tr');
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 2) {
      const classCell = cells[1];
      if (classCell.textContent.indexOf('P') !== -1) {
        row.style.backgroundColor = 'yellow';
      }
    }
  });
});
