function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    var y = document.forms["myForm"]["lastname"].value;
    var z = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if (y == "") {
        alert("Last Name must be filled out");
        return false
    }
    else if (z == ""){
        alert("Email must be filled out");
        return false
    }
}
