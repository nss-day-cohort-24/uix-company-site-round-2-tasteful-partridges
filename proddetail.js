var reviews = [
    {review: "Tidy Task changed my life. I now have time to play video games, spend time with my girlfriend,eat, get all my assignments done, and go to the gym,", author: "Ben Atkins"},
    {review: "This is my 2nd Review", author: "Ben Atkins"}
 ];

 revHtml = "";
for (i = 0; i = 2; i++) {

   revHTML += `<p>`;
   revHTML += `${reviews[i].review}`;
   revHTML += ' - ';
   revHTML += `${reviews[i].author}`;
   revHTML += `</p>`;
}
document.getElementById("critic").innerHTML = reviewHTML;