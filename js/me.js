function loaded() {
    setInterval(loop, 350)
}
document.addEventListener ? document.addEventListener("DOMContentLoaded", (function() {
    loaded()
})) : document.attachEvent && document.attachEvent("onreadystatechange", (function() {
    loaded()
}));
var x = 0,
    titleText = ["% kee.lol", "% kee.lo", "% kee.l", "% kee.", "% kee", "% ke", "% k", "% ke", "% kee", "% kee.", "% kee.l", "% kee.lo", "% kee.lol"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length]
}