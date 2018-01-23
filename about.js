var dan = {
            name: "Dan",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Pulvinar elementum integer enim neque volutpat ac.",
            URL: "img/profilepics/dan.jpg"
}

var ben = {
            name: "Ben",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Pulvinar elementum integer enim neque volutpat ac.",
            URL: "img/profilepics/ben.jpg"
}

var haden = {
            name: "Haden",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Pulvinar elementum integer enim neque volutpat ac.",
            URL: "img/profilepics/haden.png"
}

var taylor = {
            name: "Taylor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet porttitor eget dolor morbi non. Pulvinar elementum integer enim neque volutpat ac.",
            URL: "img/profilepics/taylor.JPG"
}

var team = [dan, ben, haden, taylor];

var content = "";

for ( var i=0; i < 3; i += 1 ) {
    content += `<div class="cards">
                <img src="${team[i].URL}">
                <h3>${team[i].name}</h3>
                <p>${team[i].description}</p>`;
}

document.getElementById("aboutContainer").innerHTML = content;