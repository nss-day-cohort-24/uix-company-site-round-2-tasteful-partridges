var reviews = [
    {review: "Tidy Task changed my life. I now have time to play video games, spend time with my girlfriend, eat, get all my assignments done, and go to the gym,", author: "Ben Atkins"},
 ];

 var reviewHtml = " ";
for (i = 0; i < reviews.length; i++) {

   reviewHTML = `<p>`;
   reviewHTML += `${reviews[i].review}`;
   reviewHTML += " - "
   reviewHTML += `${reviews[i].author}`;
   reviewHTML += `</p>`;
}
document.getElementById("critic").innerHTML = reviewHTML;