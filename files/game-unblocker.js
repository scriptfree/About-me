javascript:(function() {
    var square = document.createElement('div');
    square.style.position = 'fixed';
    square.style.top = '50px';
    square.style.left = '50px';
    square.style.width = '235px'; // Adjusted width to accommodate the image and text
    square.style.height = '130px'; // Adjusted height to 130 pixels
    square.style.background = 'black';
    square.style.borderRadius = '5px';
    square.style.zIndex = '9999';
    square.style.display = 'flex';
    square.style.flexDirection = 'column';
    square.style.justifyContent = 'space-between'; // Adjusted to space elements correctly
    square.style.padding = '10px';

    var closeButton = document.createElement('button');
    closeButton.textContent = 'x'; // Button text set to "x"
    closeButton.style.position = 'absolute'; // Positioned absolutely
    closeButton.style.top = '5px'; // 5px from top
    closeButton.style.right = '5px'; // 5px from right
    closeButton.style.width = '25px'; // Width of 25px
    closeButton.style.height = '25px'; // Height of 25px
    closeButton.style.backgroundColor = 'red'; // Red background color
    closeButton.style.color = 'white'; // White text color
    closeButton.style.borderRadius = '5px'; // 5px border radius
    closeButton.style.border = 'none'; // No border
    closeButton.style.fontFamily = 'Arial, sans-serif'; // Font family Arial
    closeButton.style.fontSize = '14px'; // Font size 14px
    closeButton.style.fontWeight = 'bold'; // Bold font weight
    closeButton.style.cursor = 'pointer'; // Pointer cursor
    closeButton.style.transition = 'background-color 0.3s ease'; // Transition for background color

    closeButton.addEventListener('mouseover', function() {
        closeButton.style.backgroundColor = 'lightcoral'; // Lighter red background color on hover
    });

    closeButton.addEventListener('mouseout', function() {
        closeButton.style.backgroundColor = 'red'; // Revert to red background color on mouseout
    });

    closeButton.onclick = function() {
        document.body.removeChild(square);
    };

    square.appendChild(closeButton);

    var titleContainer = document.createElement('div');
    titleContainer.style.display = 'flex';
    titleContainer.style.alignItems = 'center'; // Align items horizontally
    titleContainer.style.justifyContent = 'flex-start'; // Align items to start from left
    titleContainer.style.marginBottom = '5px'; // Added margin for spacing

    var image = document.createElement('img');
    image.src = 'https://raw.githubusercontent.com/uvgame/uvgame.github.io/main/images/blockfree.png';
    image.alt = 'Blockfree Logo';
    image.style.width = '15px'; // Set width of the image
    image.style.height = '15px'; // Set height of the image
    image.style.marginRight = '5px'; // Added margin for spacing

    var title = document.createElement('div');
    title.textContent = 'Game Unblocker'; // Changed title text to "Game Unblocker"
    title.style.color = 'white';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.fontSize = '14px';
    title.style.fontWeight = 'bold';

    titleContainer.appendChild(image);
    titleContainer.appendChild(title);
    square.appendChild(titleContainer);

    var textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.placeholder = 'Type game link...'; // Placeholder text set to "Type game link..."
    textBox.style.width = '210px'; // Adjusted width of the textbox
    textBox.style.margin = '0 auto 5px'; // Centered the textbox with smaller margin bottom
    textBox.style.padding = '8px';
    textBox.style.border = '2px solid white'; // Border width and color
    textBox.style.borderRadius = '5px'; // Border radius
    textBox.style.fontFamily = 'Arial, sans-serif';
    textBox.style.fontSize = '12px';
    textBox.style.boxSizing = 'border-box';
    textBox.style.color = 'white'; // Text color set to white
    textBox.style.background = 'black'; // Background color set to black
    textBox.style.transition = 'border-color 0.3s ease'; // Transition for border color change

    // Event listeners for hover effect
    textBox.addEventListener('mouseover', function() {
        textBox.style.borderColor = 'red';
    });

    textBox.addEventListener('mouseout', function() {
        if (!textBox.matches(':focus')) {
            textBox.style.borderColor = 'white';
        }
    });

    // Event listener for focus
    textBox.addEventListener('focus', function() {
        textBox.style.borderColor = 'red';
    });

    // Event listener for blur
    textBox.addEventListener('blur', function() {
        textBox.style.borderColor = 'white';
    });

    square.appendChild(textBox);

    // New button
    var button = document.createElement('button');
    button.textContent = 'Unblock'; // Button text changed to "Unblock"
    button.style.color = 'white'; // Text color
    button.style.background = 'black'; // Button background color
    button.style.border = '2px solid white'; // Border
    button.style.borderRadius = '5px'; // Border radius
    button.style.padding = '8px'; // Padding (adjusted to match the textbox)
    button.style.margin = '0 auto'; // Centered the button with smaller margin top
    button.style.width = '210px'; // Adjusted width of the button
    button.style.fontFamily = 'Arial, sans-serif';
    button.style.fontSize = '14px'; // Font size set to 14px
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3s ease, border-color 0.3s ease'; // Transition for background and border color

    // Hover effect
    button.addEventListener('mouseover', function() {
        button.style.backgroundColor = 'black'; // Change background color to black on hover
        button.style.borderColor = 'red'; // Change border color to red on hover
    });

    button.addEventListener('mouseout', function() {
        button.style.backgroundColor = 'black'; // Revert background color to black on mouse out
        button.style.borderColor = 'white'; // Revert border color to white on mouse out
    });

    square.appendChild(button);

    document.body.appendChild(square);

    var bottomText = document.createElement('div');
    bottomText.textContent = 'Blockfree';
    bottomText.style.position = 'fixed';
    bottomText.style.bottom = '10px'; // Adjust as needed for vertical positioning
    bottomText.style.right = '10px'; // Adjust as needed for horizontal positioning
    bottomText.style.color = 'rgba(0, 0, 0, 0.5)'; // Black text with 50% opacity
    bottomText.style.fontFamily = 'Arial, sans-serif';
    bottomText.style.fontSize = '16px';
    bottomText.style.zIndex = '9999';

    document.body.appendChild(bottomText);
})();
