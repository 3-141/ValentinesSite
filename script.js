function showMessage(response) {
  let noButtonState = 0; // Initial state

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";

    // Decrease button size
    //const currentWidth = parseFloat(getComputedStyle(noButton).width);
    //const currentHeight = parseFloat(getComputedStyle(noButton).height);
    //const newWidth = currentWidth * 0.7; // Decrease size by 10%
    //const newHeight = currentHeight * 0.7;

    //noButton.style.width = newWidth + "px";
    //noButton.style.height = newHeight + "px";

    // Adjust font size to fit within the button
    //const currentFontSize = parseFloat(getComputedStyle(noButton).fontSize);
    //const newFontSize = currentFontSize * 0.7; // Decrease font size by 10%
    // noButton.style.fontSize = newFontSize + "px";
    //noButton.style.lineHeight = newHeight + "px";


    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/fight.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    document.getElementById("question").textContent =
        "Wrong answer, choose again";
    document.getElementById("name").style.display = "none";

    // Optional: You can also add a timeout to reset the position after a few seconds
  }

  /*
  if (response === "No") {

    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yesButton");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button positions to absolute

    yesButton.style.position = "absolute";

    // Change image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/fight.gif";

    // Generate random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply new coordinates to the buttons
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide name message
    const phrases = ["Phrase 1", "Phrase 2", "Phrase 3"]; // Add your phrases here
    let index = 0;
    setInterval(function() {
      noButton.textContent = phrases[index];
      index = (index + 1) % phrases.length;
    }, 2000); // Change the interval as needed

    // Optional: You can also add a timeout to reset the position after a few seconds


  }
  */



if (response === "Yes") {
  // Remove name message and no button
  document.getElementById("name").remove();
  document.getElementById("no-button").remove();

  // Update text content, show message, and change image source to "dance.gif"
  const yesMessage = document.getElementById("question");
  yesMessage.textContent = "Correct response";
  yesMessage.textContent = "Yay, I love you so much babygorl😘😘";
  yesMessage.style.display = "block";
  yesMessage.style.fontStyle = "normal";
  document.getElementsByClassName("image")[0].src = "images/dance.gif";

  // Remove yes button
  document.getElementById("yesButton").remove();
}
}



