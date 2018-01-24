var mobileapp = {
    name: "Mobile App - Time Management",
    description: "Time management to organize your schedule",
    price: 20.00,
    URL: "/img/proddetail1.png",
    tax: 1.85
}

/** var grandTotal = "$" + parseInt(mobileapp.price) + parseInt(mobileapp.tax) **/

var grandTotal = "$" + (mobileapp.price + mobileapp.tax).toFixed(2);

var checkoutCard = "";

var invoice = "";

checkoutCard = `<img class="cartCardImg" src="${mobileapp.URL}">
<div class="check-text">
<p><strong>${mobileapp.name}</strong><br>
${mobileapp.description}<br>
$${mobileapp.price}</p>`;

invoice = `<div class="check-money"><p>Total: $${mobileapp.price}<br>
Sales Tax: $${mobileapp.tax}<br>
Grand Total: <strong>${grandTotal}</strong></p></div>`;

document.getElementById("checkout-container").innerHTML = checkoutCard;

document.getElementById("bill-container").innerHTML = invoice;
