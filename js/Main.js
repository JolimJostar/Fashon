
$(document).scroll(function() {


    FullID = document.getElementById("HeaderFull");
    FoldedID = document.getElementById("HeaderFolded")

    var myScrollFunc = function () {
        var y = window.scrollY;
        if (y >= 214) {
            FullID.className = "HeaderFull Hide"
            FoldedID.className = "HeaderFolded Show"
        } else {
            FullID.className = "HeaderFull Show"
            FoldedID.className = "HeaderFolded Hide"
        }
    };

    window.addEventListener("scroll", myScrollFunc);
});
