const DomSelectors = {
  button: document.querySelector("#button"),
  name: document.getElementById("Fname"),
  age: document.getElementById("age"),
  image: document.getElementById("image"),
  CardList: document.querySelector(".CardList"),
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
    DomSelectors.CardList.appendChild(output); // The output exists in code, but needs to be added into HTML, append adds the code into the HTMl as a child element
    gone(output); // Calls on the function "remove"
  }
}

function gone(output) {
  const button = output.querySelector(".remove");
  button.addEventListener("click", function () {
    output.remove();
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
  CreateCard(name, age, image);
  reset();
});
