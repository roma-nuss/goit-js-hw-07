const form = document.querySelector("form.login-form");
form.addEventListener("submit", () => {
  event.preventDefault();

  let allFilled = true;
  const formElements = form.elements;
  for (const element of formElements) {
    if (element.tagName === "INPUT" && !element.value.trim()) {
      allFilled = false;
      break;
    }
  }
  if (!allFilled) {
    alert("All form fields must be filled in");
    return;
  }

  const formDataObject = {};
  for (const element of formElements) {
    if (element.tagName === "INPUT") {
      formDataObject[element.name] = element.value.trim();
    }
  }

  console.log(formDataObject);
  form.reset();
});
