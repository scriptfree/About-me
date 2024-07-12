javascript:(function() {
    var gameName = prompt("Type game name (Press esc to cancel).");
    if (gameName !== null) {
        var linkfix = gameName.replace(/ /g, '-') + '.html';
        var iframe = document.createElement('iframe');
        iframe.src = "https://uvgame.github.io/" + linkfix;
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        document.body.appendChild(iframe);
    }
})();
