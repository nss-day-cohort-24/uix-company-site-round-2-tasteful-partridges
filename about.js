var dan = {
            name: "Dan",
            description: "As Lead Developer and Designer, Dan helps to guide our junior developers to creating the best possible products for our customers.",
            URL: "img/profilepics/dan.jpg"
}

var ben = {
            name: "Ben",
            description: "First of our three junior designers and developers at IDEOIndustries, Ben works tirelessly on keeping our products up to date.",
            URL: "img/profilepics/ben.jpg"
}

var haden = {
            name: "Haden",
            description: "As our Junior Designer Haden creates the look and feel of our products to meet the needs of our users.",
            URL: "img/profilepics/haden.png"
}

var taylor = {
            name: "Taylor",
            description: "Our jack-of-all-trades, Taylor is able to assist in both design and development of our products seamlessly.",
            URL: "img/profilepics/taylor.JPG"
}

var team = [dan, ben, haden, taylor];

var content = "";

for ( var i=0; i <= 3; i += 1 ) {
    content += `<div class="cards">
                <img src="${team[i].URL}">
                <h3>${team[i].name}</h3>
                <p>${team[i].description}</p>`;
}

document.getElementById("aboutContainer").innerHTML = content;