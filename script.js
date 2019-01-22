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

console.log("testing github background app");