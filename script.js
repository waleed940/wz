// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Change background to light pink
        document.body.style.backgroundColor = '#ffccdd'; 

        // Hide the question and buttons
        document.getElementById('question').style.display = 'none';
        document.getElementById('options').style.display = 'none';

        // Display the custom image and paragraph
        displayCustomImage();
        displayParagraph();
    } else if (option === 'no') {
        // Change text on the "No" button to "ZAINAB PLEASE"
        document.getElementById('no-button').innerText = 'ZAINAB PLEASE'; 

        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Function to display a paragraph
function displayParagraph() {
    var messageContainer = document.getElementById('message');
    messageContainer.innerHTML = ''; // Clear existing content
    messageContainer.style.display = 'block'; // Make it visible

    var paragraph = document.createElement('p');
    paragraph.textContent = 'My dear Zainab, thank you for choosing me as your Valentine. Second year in a row now, so I think you might have a lil crush on me. Seriously though, after 545 days AND COUNTING, you have always shown me ways to love you more and more. You know I love you, but I love you more than you know. You are my heart, my soul, my mind, my moon, my whole. I will never love anybody as much as I love you. THANK YOU FOR EVERYTHING. HAPPY VALENTINE!!!';

    // Styling
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = "'Sacramento', cursive";
    paragraph.style.textAlign = 'center';
    paragraph.style.marginTop = '20px';
    paragraph.style.color = '#d63384';

    messageContainer.appendChild(paragraph);
}

// Function to display a custom image
function displayCustomImage() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing content

    var customImage = new Image();
    customImage.src = 'your-image.jpg'; // Replace with your chosen image
    customImage.alt = 'Custom Image';

    custom
