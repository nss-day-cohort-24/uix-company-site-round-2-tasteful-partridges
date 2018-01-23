var mobileapp = {
    name: "Mobile App - Time Management",
    description: "Time management to organize your schedule",
    price: "$20.00",
    URL: "/img/proddetail.jpg"
}

cartCard = `<div id="cart-container"><img class="cartCardimg" src="${mobileapp.URL}"><br><p>${mobileapp.name}<br>${mobileapp.description}<br>${mobileapp.price}</p></div>`;

document.getElementById("cart-container").innerHTML = cartCard;