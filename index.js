const DomSelectors = {
  button: document.querySelector("#button"),
  name: document.getElementById("Fname"),
  age: document.getElementById("age"),
  image: document.getElementById("image"),
  container: document.querySelector(".container"),
};

function CreateCard(name, age, image) {
  if (name && age && image) {
    // Checks if name, age, and image are provided, Refering to a variable checks if it exists
    const output = document.createElement("div"); // Creates a new div element
    output.className = "output"; // Assigns the div the name "output"
    output.innerHTML = `  
    <div>  
    <h1>Character: ${name}</h1> 
    <p>Age: ${age}</p>  
    <img src="${image}">  
    </div>
    <button class="remove">Delete</button>   
    `;
    DomSelectors.container.append(output); // The output exists in code, but needs to be added into HTML, append adds the code into the HTMl as a child element
    return output;
  }
}

function gone(output) {
  const button = output.querySelector(".remove"); // Select the remove button from the output card
  button.addEventListener("click", function () {
    output.remove(); // When the remove button is clicked, delete the card
  });
}

function reset() {
  DomSelectors.name.value = "";
  DomSelectors.age.value = "";
  DomSelectors.image.value = "";
}

DomSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  const name = DomSelectors.name.value;
  const age = DomSelectors.age.value;
  const image = DomSelectors.image.value;
  const output = CreateCard(name, age, image); // Create the Card
  gone(output); // Calls on the function "remove"
  reset(); // Reset the values
});
