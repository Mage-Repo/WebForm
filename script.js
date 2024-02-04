function submitForm() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foodOptions = document.getElementById('food').selectedOptions;
    var food = Array.from(foodOptions).map(option => option.value).join(', ');
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

 
    var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

 
    var cells = [
        newRow.insertCell(0),
        newRow.insertCell(1),
        newRow.insertCell(2),
        newRow.insertCell(3),
        newRow.insertCell(4),
        newRow.insertCell(5),
        newRow.insertCell(6),
        newRow.insertCell(7)
    ];

    cells[0].innerText = firstName;
    cells[1].innerText = lastName;
    cells[2].innerText = address;
    cells[3].innerText = pincode;
    cells[4].innerText = gender;
    cells[5].innerText = food;
    cells[6].innerText = state;
    cells[7].innerText = country;

 
    document.getElementById('myForm').reset();
}
