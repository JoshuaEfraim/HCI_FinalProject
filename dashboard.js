document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("myModal");

    var enterButton = document.getElementById("enterButton");

    modal.style.display = "block";

    enterButton.onclick = function() {
        modal.style.display = "none"
    }
});