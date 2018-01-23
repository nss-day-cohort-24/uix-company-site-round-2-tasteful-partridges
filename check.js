var mobileapp = {
    name: "Mobile App - Time Management",
    description: "Time management to organize your schedule",
    price: 20.00,
    URL: "image.jpg", //insert image
    tax: 1.85
}

/** var grandTotal = "$" + parseInt(mobileapp.price) + parseInt(mobileapp.tax) **/

var grandTotal = "$" + (mobileapp.price + mobileapp.tax).toFixed(2);

var checkoutCard = "";

checkoutCard = `<div id="checkout-container">
<img class="cartCard_img" src="${mobileapp.URL}"><br>
<p>${mobileapp.name}<br>
${mobileapp.description}<br>
$${mobileapp.price}<br>
$${mobileapp.tax}<br>
${grandTotal}</p></div>`;

document.getElementById("checkout-container").innerHTML = checkoutCard;
