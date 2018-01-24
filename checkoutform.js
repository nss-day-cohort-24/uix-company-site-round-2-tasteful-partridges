function validateForm() {
    var a = document.forms["shippingForm"]["firstname"].value;
    var b = document.forms["shippingForm"]["lastname"].value;
    var c = document.forms["shippingForm"]["email"].value;
    var d = document.forms["shippingForm"]["address1"].value;
    var e = document.forms["shippingForm"]["address2"].value;
    var f = document.forms["shippingForm"]["city"].value;
    var g = document.forms["shippingForm"]["state"].value;
    var h = document.forms["shippingForm"]["zip"].value;
    var i = document.forms["shippingForm"]["country"].value;

    if (a == "") {
        alert("First Name must be filled out");
        return false;
    }
    else if (b == "") {
        alert("Last Name must be filled out");
        return false
    }
    else if (c == "") {
        alert("Email must be filled out");
        return false
    }
    else if (d == "") {
        alert("Address must be filled out");
        return false
    }
    else if (f == "") {
        alert("City must be filled out");
        return false

    }
    else if (g == "") {
        alert("State/Province/Country must be filled out");
        return false
    }
    else if (h == "") {
        alert("Zip/Country Code must be filled out");
        return false
    }

    else if (i == "") {
        alert("Country must be filled out");
        return false

}