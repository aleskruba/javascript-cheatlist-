var selectedRow = null;

// Show bootrstrap alert
function showAlert(message,className){
    const div = document.createElement("div")
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message))
    
    const container = document.querySelector(".container")
    const main = document.querySelector(".main")
    
    container.insertBefore(div,main);

    setTimeout(()=>document.querySelector(".alert").remove(),3000);
    
}

// Clear fields
function clearFields(){
    document.querySelector('#fistName').value = "";
    document.querySelector('#lastName').value = "";
    document.querySelector('#role').value = "";
}


// Add Data

document.querySelector("#student-form").addEventListener('submit', e=> {
    e.preventDefault();

        const firstName = document.querySelector('#firsName').value
        const lastName = document.querySelector('#lastName').value
        const role = document.querySelector('#role').value
    
        //validate
        if (firstName == "" || lastName == "" || role == "") {
            showAlert("please fill in all fields","danger")
        }
        else {
            if(selectedRow == null) {
                const list = document.querySelector("#student-list");
                const row = document.createElement("tr");

                row.innerHTML = `
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${role}</td>
                <td>
                    <a href="#" class="btn btn-success edit">edit</a>
                    <a href="#" class="btn btn-danger delete">delete</a>
                </td>
                `;

                list.appendChild(row);
                selectedRow = null
                showAlert("Student added","success")
            }
                else {
                    selectedRow.children[0].textContent = firstName;
                    selectedRow.children[1].textContent = lastName;
                    selectedRow.children[2].textContent = role;
                    selectedRow = null
                    showAlert("Student info Edited","info")
                }

                clearFields()

        }
})

//Edit Data

document.querySelector("#student-list").addEventListener('click', e=> {

    target = e.target
    if (target.classList.contains('edit')) {
        selectedRow = target.parentElement.parentElement
        document.querySelector("#firsName").value = selectedRow.children[0].textContent
        document.querySelector("#lastName").value = selectedRow.children[1].textContent
        document.querySelector("#role").value = selectedRow.children[2].textContent

    }
})


// Delete Data

document.querySelector("#student-list").addEventListener('click', e=> {

    target = e.target
    if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
            showAlert("Student Data Deleted", "danger")
    }
})
