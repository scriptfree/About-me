javascript:(function() {
    // List of supported game names
    var supportedGames = [
        "cookie clicker",
        "crossy road",
        "eggy car",
        "geometry dash",
        "gun mayhem 2",
        "krunker",
        "mad gunz",
        "moto x3m",
        "ovo",
        "roblox",
        "smash karts",
        "tap tap shots",
        "wings"
    ];

    var gameName = prompt("Type game name (Press esc to cancel).");

    if (gameName !== null) {
        var lowerCaseGameName = gameName.toLowerCase(); // Convert to lowercase
        var formattedName = lowerCaseGameName.replace(/ /g, '-') + '.html';

        // Check if the entered game name is supported
        if (supportedGames.includes(lowerCaseGameName)) {
            var iframe = document.createElement('iframe');
            iframe.src = "https://raw.githubusercontent.com/uvgame/uvgame.github.io/main/" + formattedName;
            iframe.style.position = "fixed";
            iframe.style.top = "0";
            iframe.style.left = "0";
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.border = "none";
            document.body.appendChild(iframe);
        } else {
            alert("Game not supported.");
        }
    }
})();
