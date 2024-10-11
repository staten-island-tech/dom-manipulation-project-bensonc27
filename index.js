const DomSelectors = {
  button: document.querySelector("button"),
  text: document.querySelector("text"),
  input: document.querySelector("input"),
};

DomSelectors.button.addEventListener("click", function () {
  let input = DomSelectors.input.value;
  console.log(input);
});
