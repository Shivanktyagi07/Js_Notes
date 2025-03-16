// example-1: Changing the text when the button is clicked
document.getElementById("button").addEventListener("click", function () {
  let paragraph = document.getElementById("myPara");
  paragraph.textContent = "Paragraph is changed!";
});

//  Challenge 1: Toggle Paragraph Visibility
document.getElementById("togglePara").addEventListener("click", function () {
  let paragraph = document.getElementById("myPara");
  paragraph.classList.toggle("hidden");
});

// example-2: Highlight the first city in the list
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("list");
    citiesList.firstElementChild.classList.add("highlight");
  });

//  Challenge 2: Remove Last City from the List
document
  .getElementById("removeLastCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("list");
    if (citiesList.lastElementChild) {
      citiesList.removeChild(citiesList.lastElementChild);
    }
  });

// example-3: Change the coffee order text
document.getElementById("clickOnMe").addEventListener("click", function () {
  let change = document.getElementById("coffeeType");
  change.textContent = "Enter coffee which you want !";
});

//  Challenge 3: Update Coffee Order Based on Input
document.getElementById("updateCoffee").addEventListener("click", function () {
  let coffeeInput = document.getElementById("coffeeInput").value;
  let coffeeType = document.getElementById("coffeeType");

  if (coffeeInput.trim() !== "") {
    coffeeType.textContent = `Coffee order changed to ${coffeeInput}!`;
  }
});

// example-4: Add a new item to the list
document.getElementById("add").addEventListener("click", function () {
  let newItemText = document.getElementById("itemInput").value.trim(); // Get input and remove extra spaces

  if (newItemText !== "") {
    let newItem = document.createElement("li"); // Create new <li> element
    newItem.textContent = newItemText; // Set text content
    document.getElementById("itemList").appendChild(newItem); // Append to list

    document.getElementById("itemInput").value = ""; // Clear input field
  } else {
    alert("Please enter a new item!"); // Show alert if input is empty
  }
});

// Challenge 4: Count List Items and Display Count
document.getElementById("countItems").addEventListener("click", function () {
  let itemList = document.getElementById("itemList").children.length;
  document.getElementById("itemCount").textContent = `Total Items: ${itemList}`;
});

// example-5: Change background color randomly
document.getElementById("changeBg").addEventListener("click", function () {
  let colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#9B59B6",
    "#E74C3C",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
