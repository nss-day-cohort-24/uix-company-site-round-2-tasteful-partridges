var reviews = [
    {review: "Tidy Task changed my life. I now have time to play video games, spend time with my girlfriend,eat, get all my assignments done, and go to the gym,", author: "Trevor Noah"},
    {review: "This is my Review; I'm still hopelessly addicted to this product", author: "Stephon Diggs"}
 ];

revHtml = "";
revTwo = ""

revHTML = `<p>`;
revHTML += `${reviews[0].review}`;
revHTML += ' - ';
revHTML += `${reviews[0].author}`;
revHTML += `</p>`;

revTwo = `<p>`;
revTwo += `${reviews[1].review}`;
revTwo += ' - ';
revTwo += `${reviews[1].author}`;
revTwo += `</p>`;

document.getElementById("critic").innerHTML = revHTML;
document.getElementById("critic2").innerHTML = revTwo;






