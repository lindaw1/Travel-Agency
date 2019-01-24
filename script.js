console.log("hello");

var submitButton = document.getElementById("lindaSubmit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var submitNow = confirm("Are you sure you want to submit this form?");
    if (submitNow === true) {
        console.log("submit is true");
    }else {
        alert("Have a nice day.  Maybe you will submit another day.");
}});

var resetButton = document.getElementById("lindaReset");

resetButton.addEventListener("click", function(event) {
    event.preventDefault();
    var submitNow = confirm("Are you sure you want to reset?");
    if (submitNow === true) {
        console.log("reset is true");
    }else {
        alert("Reset is cancelled");
}});

var img1 = 'http://placekitten.com/300/300';
var img2 = 'https://pngtree.com/freepng/cartoon-travel-bag_3302638';
var img3 = 'img/willian-west.jpg';
var img4 = 'img/jeshoots.jpg';
var imageArray = [img1, img2, img3, img4];

var desc1 = 'Sally really likes to go here.';
var desc2 = 'Most couples love this destination';
var desc3 = 'This is a very sunny spot';
var desc4 = 'Great destination';
var descArray = [desc1, desc2, desc3, desc4];



var table = document.createElement('table');
var tr = document.createElement('tr');

var th1 = document.createElement('th');
var imageHeader = document.createTextNode('Images');
th1.appendChild(imageHeader);
tr.appendChild(th1);

var th2 = document.createElement('th');
var descriptionHeader = document.createTextNode('Descriptions');
th2.appendChild(descriptionHeader);
tr.appendChild(th2);

table.appendChild(tr);

for (var i = 0; i < imageArray.length; i++) {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td',);
    var image = document.createElement('img');
    image.src = imageArray[i];
    td1.appendChild(image);
    tr.appendChild(td1);
    
    var td2 = document.createElement('td');
    var paragraph = document.createElement('p');
    var paragraphText = document.createTextNode(descArray[i]);
    paragraph.appendChild(paragraphText);
    td2.appendChild(paragraph);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.getElementById("lindaTable").appendChild(table);

