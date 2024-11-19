document.getElementById('changeColor').addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('addElement').addEventListener('click', function () {
  const newElement = document.createElement('p');
  newElement.textContent = 'A new element has been added!';
  document.getElementById('dynamicContent').appendChild(newElement);
});

document.getElementById('toggleVisibility').addEventListener('click', function () {
  const content = document.getElementById('dynamicContent');
  content.classList.toggle('hidden');
});

document.getElementById('animateElement').addEventListener('click', function () {
  const content = document.getElementById('dynamicContent');
  content.classList.toggle('animate');
});

document.getElementById("modifyText").addEventListener("click", function() {
    document.getElementById("dynamicContent").textContent = "The text has been changed. Did you enjoy the day?";
});

let clickCount = 0; // Variable to track the number of clicks

document.getElementById("addElement").addEventListener("click", function() {
    clickCount++; // Increment the click count

    // Create a new paragraph element
    var newElement = document.createElement("p");

    // Determine what text to add based on the number of clicks
    if (clickCount === 1) {
        newElement.textContent = "Wassshuup";
    } else if (clickCount === 2) {
        newElement.textContent = "Haha, it's good";
    } else if (clickCount === 3) {
        newElement.textContent = "Welcome, one more time, Wassshupp!";
    } else if (clickCount === 4) {
        newElement.textContent = "Don't click more, you will be gona die!";
    } else if (clickCount === 5) {
        newElement.textContent = "why you are clicking";
    } else if (clickCount === 6) {
            newElement.textContent = "I am Just kidding professor BEN. hahaha";   
    }

    // Append the new element to the body or a specific container
    document.body.appendChild(newElement); // You can append it to another container if desired
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
