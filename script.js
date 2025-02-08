// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Change background to light pink
        document.body.style.backgroundColor = '#ffccdd'; // Light pink color
        document.getElementById('question').style.display = 'none'; // Hide the question
        displayCustomImage(); // Display the chosen image
        displayParagraph(); // Display the paragraph
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'ZAINAB PLEASE?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to display a paragraph
function displayParagraph() {
    var textContainer = document.getElementById('text-container');
    var paragraph = document.createElement('p');
    paragraph.textContent = 'My dear Zainab, thank you for choosing me as your Valentine. Second year in a row now, so I think you might have a lil crush on me. Seriously though, after 545 days AND COUNTING, you have always shown me ways to love you more and more. You know I love you, but I love you more than you know. You are my heart, my soul, my mind, my moon, my whole. I will never love anybody as much as I love you. You do so much for me and I will always appreciate it, your vns brighten my day when I get to hear your voice, your sweet SWEET messages warms my heart whenever you reassure me and lastly your VLOGS I LOVE THEM SO MUCH MAN. Zainab I want you to know that no matter what I am always proud of you and you do more than enough. InshAllah when we get married we can do soooooooo many valentine dates together in person but for now ig I will make websites for you Im sorry this isnt much I tried my best xx but THANK YOU FOR EVERYTHING. HAPPY VALENTINE!!!'; // Replace with your message
    textContainer.appendChild(paragraph);
}

// Function to display a custom image
function displayCustomImage() {
    document.getElementById('image-container').innerHTML = ''; // Clear existing content
    var imageContainer = document.getElementById('image-container');
    var customImage = new Image();
    customImage.src = 'your-image.jpg'; // Replace with your chosen image
    customImage.alt = 'Custom Image';
    customImage.onload = function() {
        imageContainer.appendChild(customImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Function to display the initial custom image
function displayInitialCustomImage() {
    var imageContainer = document.getElementById('image-container');
    var initialImage = new Image();
    initialImage.src = 'your-initial-image.jpg'; // Replace with your initial image
    initialImage.alt = 'Initial Image';
    initialImage.onload = function() {
        imageContainer.appendChild(initialImage);
    };
}

// Display the initial custom image
displayInitialCustomImage();
