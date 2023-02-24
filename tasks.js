// Add event listener to "Add New Task" button
const addTaskBtn = document.getElementById("addTaskBtn");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
  // Create a new row in the table
  const table = document.querySelector("table");
  const newRow = table.insertRow(-1);

  // Add cells to the new row
  const nameCell = newRow.insertCell(0);
  const descCell = newRow.insertCell(1);
  const editCell = newRow.insertCell(2);

  // Add inputs and button to the new cells
  nameCell.innerHTML = "<input type='text' placeholder='Task name'>";
  descCell.innerHTML = "<input type='text' placeholder='Task description'>";
  editCell.innerHTML = "<button>Edit</button>";
}
