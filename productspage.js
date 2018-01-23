var mobileapp = {
            name: "Mobile App - Time Management",
            description:"Time management to organize your schedule",
            price: "$20.00",
            URL: "image.jpg" //insert image
}

var activistpack = {
            name: "Activist Survival Pack",
            description: "Ultimate pack to satisfy your inner activist",
            price: "$5.00",
            URL: "image.jpg" //insert image
}

var virtualassistant = {
            name: "Virtual Assistant",
            description: "All the perks of a personal assistant, available 24/7",
            price: "$50.00",
            URL: "image.jpg" //insert image
}

var desktopapp = {
            name: "Desktop App",
            description: "Desktop App - Time Management",
            price: "$20.00",
            URL: "image.jpg" //insert image
}

var smartsportglasses = {
            name: "Smart Sport Glasses",
            description: "Having access to everything on your phone, in your glasses",
            price: "$50.00",
            URL: "image.jpg" //insert image
}

var smartring = {
            name: "Smart Ring",
            description: "Displays all of your necessities from your ring",
            price: "$75.00",
            URL: "image.jpg" //insert image
}

var smartwatch = {
            name: "Smart Watch",
            description: "Like an Apple Watch, but Stark made it",
            price: "$100.00",
            URL: "image.jpg" //insert image

}

var tablet = {
            name: "Tablet",
            description: "Having all of your information imported into a tablet",
            price: "$100.00",
            URL: "image.jpg" //insert image
}

var products = [mobileapp, activistpack, virtualassistant, desktopapp, smartsportglasses, smartring, smartwatch, tablet];

var desc = ""; 

for ( var i = 0; i < 8; i += 1 ) {
   desc += `<div id="cards"><img class="card_img" src="${products[i].URL}"><br><p>${products[i].name}<br>${products[i].description}<br>${products[i].price}</p></div>`;
}


document.getElementById("container").innerHTML = desc;