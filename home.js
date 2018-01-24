var goal1 = {
        description: "Develop"
}

var goal2= {
        description: "Deliver"
}

var goal3= {
        description: "De-Stress"
}

var goals = [goal1, goal2, goal3];

var slogan = "";

for ( var i=0; i <=2; i += 1 ) {
    slogan += `<div id="slogan">
                <h3>${goals[i].description}</h3>`
}

document.getElementById("slogan").innerHTML = slogan;

