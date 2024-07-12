javascript:(function() {
    var square = document.createElement('div');
    square.style.position = 'fixed';
    square.style.top = '50px';
    square.style.left = '50px';
    square.style.width = '235px'; 
    square.style.height = '130px'; 
    square.style.background = 'black';
    square.style.borderRadius = '5px';
    square.style.zIndex = '9999';
    square.style.display = 'flex';
    square.style.flexDirection = 'column';
    square.style.justifyContent = 'space-between'; 
    square.style.padding = '10px';

    // Drag functionality
    var isDragging = false;
    var offsetX, offsetY;

    square.addEventListener('mousedown', function(e) {
        isDragging = true;
        offsetX = e.clientX - square.getBoundingClientRect().left;
        offsetY = e.clientY - square.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) {
            square.style.left = (e.clientX - offsetX) + 'px';
            square.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    var closeButton = document.createElement('button');
    closeButton.textContent = 'x'; 
    closeButton.style.position = 'absolute'; 
    closeButton.style.top = '5px'; 
    closeButton.style.right = '5px'; 
    closeButton.style.width = '25px'; 
    closeButton.style.height = '25px'; 
    closeButton.style.backgroundColor = 'red'; 
    closeButton.style.color = 'white'; 
    closeButton.style.borderRadius = '5px'; 
    closeButton.style.border = 'none'; 
    closeButton.style.fontFamily = 'Arial, sans-serif'; 
    closeButton.style.fontSize = '14px'; 
    closeButton.style.fontWeight = 'bold'; 
    closeButton.style.cursor = 'pointer'; 
    closeButton.style.transition = 'background-color 0.3s ease'; 

    closeButton.addEventListener('mouseover', function() {
        closeButton.style.backgroundColor = 'lightcoral'; 
    });

    closeButton.addEventListener('mouseout', function() {
        closeButton.style.backgroundColor = 'red'; 
    });

    closeButton.onclick = function() {
        document.body.removeChild(square);
    };

    square.appendChild(closeButton);

    var titleContainer = document.createElement('div');
    titleContainer.style.display = 'flex';
    titleContainer.style.alignItems = 'center'; 
    titleContainer.style.justifyContent = 'flex-start'; 
    titleContainer.style.marginBottom = '5px'; 

    var image = document.createElement('img');
    image.src = 'https://raw.githubusercontent.com/uvgame/uvgame.github.io/main/images/blockfree.png';
    image.alt = 'Blockfree Logo';
    image.style.width = '15px'; 
    image.style.height = '15px'; 
    image.style.marginRight = '5px'; 

    var title = document.createElement('div');
    title.textContent = 'Game Unblocker'; 
    title.style.color = 'white';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.fontSize = '14px';
    title.style.fontWeight = 'bold';

    titleContainer.appendChild(image);
    titleContainer.appendChild(title);
    square.appendChild(titleContainer);

    var textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Type game link...'; 
    textBox.style.width = '210px'; 
    textBox.style.margin = '0 auto 5px'; 
    textBox.style.padding = '8px';
    textBox.style.border = '2px solid white'; 
    textBox.style.borderRadius = '5px'; 
    textBox.style.fontFamily = 'Arial, sans-serif';
    textBox.style.fontSize = '12px';
    textBox.style.boxSizing = 'border-box';
    textBox.style.color = 'white'; 
    textBox.style.background = 'black'; 
    textBox.style.transition = 'border-color 0.3s ease'; 

    textBox.addEventListener('mouseover', function() {
        textBox.style.borderColor = 'red';
    });

    textBox.addEventListener('mouseout', function() {
        if (!textBox.matches(':focus')) {
            textBox.style.borderColor = 'white';
        }
    });

    textBox.addEventListener('focus', function() {
        textBox.style.borderColor = 'red';
    });

    textBox.addEventListener('blur', function() {
        textBox.style.borderColor = 'white';
    });

    square.appendChild(textBox);

    var button = document.createElement('button');
    button.textContent = 'Unblock'; 
    button.style.color = 'white'; 
    button.style.background = 'black'; 
    button.style.border = '2px solid white'; 
    button.style.borderRadius = '5px'; 
    button.style.padding = '8px'; 
    button.style.margin = '0 auto'; 
    button.style.width = '210px'; 
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '14px'; 
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease, border-color 0.3s ease'; 

    button.addEventListener('click', function() {
        var url = textBox.value.trim();
        if (url) {
            if (!/^https?:\/\//i.test(url)) {
                url = 'https://' + url; 
            }
            var newTab = window.open('about:blank');
            if (newTab) {
                newTab.document.title = 'Blockfree'; 
                var favicon = document.createElement('link');
                favicon.rel = 'shortcut icon';
                favicon.href = 'https://raw.githubusercontent.com/uvgame/uvgame.github.io/main/images/blockfree.png';
                newTab.document.head.appendChild(favicon);
                newTab.document.write(`
                    <style>
                        body, html {
                            margin: 0;
                            padding: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                        iframe {
                            border: none;
                            width: 100%;
                            height: 100%;
                        }
                    </style>
                    <iframe src="${url}"></iframe>
                `);
            } else {
                alert('Popup blocked. Please allow popups for this site and try again.');
            }
        } else {
            alert('Please enter a valid URL.');
        }
    });

    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'black'; 
        button.style.borderColor = 'red'; 
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = 'black'; 
        button.style.borderColor = 'white'; 
    });

    square.appendChild(button);
    document.body.appendChild(square);

    var bottomText = document.createElement('div');
    bottomText.textContent = 'Blockfree';
    bottomText.style.position = 'fixed';
    bottomText.style.bottom = '10px'; 
    bottomText.style.right = '10px'; 
    bottomText.style.color = 'rgba(0, 0, 0, 0.5)'; 
    bottomText.style.fontFamily = 'Arial, sans-serif';
    bottomText.style.fontSize = '16px';
    bottomText.style.zIndex = '9999';

    document.body.appendChild(bottomText);
})();
