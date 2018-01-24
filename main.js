var mobileapp = {
    name: "Time Management Mobile App",
    description: "A mobile app to organize your schedule",
    price: "$20.00",
    URL: "/img/proddetail1.png"
}

cartCard = `<img class="cartCardImg" src="${mobileapp.URL}"><div class="cart-text"><p><strong>${mobileapp.name}</strong><br>${mobileapp.description}<br>${mobileapp.price}</p>`;

document.getElementById("cart-container").innerHTML = cartCard;