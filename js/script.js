// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var $ = function(id){
    "use strict";
    return document.getElementById(id);
};

var form = $("addForm");
var employeeTable = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = 0;
$("empCount").textContent = count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var id = $("id").value;
    var name = $("name").value;
    var extension = $("extension").value;
    var email = $("email").value;
    var department = $("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style = "background-color: red; color: white"
    deleteButton.addEventListener("click", deleteEmployee);
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    $("empCount").textContent = count;

});

// DELETE EMPLOYEE
function deleteEmployee(e) {
    if (confirm("Are you sure you want to delete this employee?")) {
        let rowIndex = e.target.parentElement.parentElement.rowIndex;
        employeeTable.deleteRow(rowIndex);
        count--;
        $("empCount").textContent = count;
    }
}
