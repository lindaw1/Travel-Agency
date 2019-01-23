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

var img1 = 'img/marten-bjork.jpg';
var img2 = 'img/ludovic-fremondiere.jpg';
var img3 = 'img/willian-west.jpg';
var img4 = 'img/jeshoots.jpg';
var imageArray = [img1, img2, img3, img4];

var desc1 = '1blah blha blah';
var desc2 = '2blah blah blah';
var desc3 = '3blah blah blah';
var desc4 = '4blah blah blah';
var descArray = [desc1, desc2, desc3, desc4];

for (var i = 0; i < imageArray.length; i++) {
    console.log(imageArray[i]);
    console.log(descArray[i]);
}
var pageBody = document.getElementById('day6')[0];
var newTable = document.createElement('th');
var tableRow = document.createTextNode('Linda');
newTable.appendChild(tableRow);
pageBody.appendChild(newTable);
