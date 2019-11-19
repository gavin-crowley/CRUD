var selectedRow = null


document.forms[0].addEventListener('submit', function(e){
    e.preventDefault();

        // if (validate()) {
            var formData = readFormData();
            if (selectedRow == null)
                insertNewRecord(formData);
            else
                updateRecord(formData);
                resetForm();
        // }
});


function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["username"] = document.getElementById("username").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("userList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.username;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<a onClick="onEdit(this)" class="button muted-button">Edit</a>
                       <a onClick="onDelete(this)" class="button muted-button">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("username").value = "";
    selectedRow = null;
}

function onCancel () {
    document.getElementsByClassName('form-action-buttons')[0].innerHTML = 
     `<div class="form-action-buttons">
     <button onClick="submit">Add new user</button>
    </div>`
    resetForm();
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("username").value = selectedRow.cells[1].innerHTML;

     // create elements
    //  const value = addForm.querySelector('input[type="text"]').value;
    //  const li = document.createElement('li');
    //  const div = document.createElement('div');
    //  const updateBtn = document.createElement('button');
    //  const cancelBtn = document.createElement('button');

     // add text content
    //  bookName.textContent = value;
    //  updateBtn.textContent = 'Update user';
    //  cancelBtn.textContent = 'Cancel';
 
     // add classes
    //  div.classList.add('form-action-buttons');
    //  updateBtn.classList.add('delete');
 
     // append to DOM
     
    //  div.appendChild(updateBtn);
    //  div.appendChild(cancelBtn);
    //  document.forms[0].div[2].appendChild(div);
    //  document.getElementsByClassName('form-action-buttons')[0].appendChild(updateBtn);
     document.getElementsByClassName('form-action-buttons')[0].innerHTML = 
     `<div class="form-action-buttons">
     <button onClick="submit" onmouseup="(onCancel())">Update user</button>
     <button onClick="(onCancel(this))" class="button muted-button">Cancel</button>
    </div>`

    // document.getElementsByClassName('form-action-buttons')[0].innerHTML = 
    //  `<div class="form-action-buttons">
    //  <button onClick="submit">Add new user</button>
    // </div>`

    // cell2 = newRow.insertCell(2);
    // selectedRow.cells[2].innerHTML = `<a onClick="onEdit(this)">Update User</a>
    //                    <a onClick="onDelete(this)">Cancel</a>`;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.username;
}

function onDelete(td) {
    // if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("userList").deleteRow(row.rowIndex);
        resetForm();
    // }
}
// function validate() {
//     isValid = true;
//     if (document.getElementById("name").value == "") {
//         isValid = false;
//         document.getElementById("nameValidationError").classList.remove("hide");
//     } else {
//         isValid = true;
//         if (!document.getElementById("nameValidationError").classList.contains("hide"))
//             document.getElementById("nameValidationError").classList.add("hide");
//     }
//     return isValid;
// }