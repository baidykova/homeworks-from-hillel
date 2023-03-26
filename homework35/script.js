const table = document.createElement("table");
const tableContainer = document.getElementById("table-container");
tableContainer.appendChild(table);
table.style.border = '5px solid pink';

let count = 1;
for (let i = 0; i < 10; i++) {
  const rows = document.createElement("tr");
  table.appendChild(rows);
  for (let j = 0; j < 10; j++) {
    const cells = document.createElement("td");
    cells.style.border = "5px solid pink";
    cells.style.textAlign = 'center';
    cells.textContent = count;
    rows.appendChild(cells);
    count++;
  }
}