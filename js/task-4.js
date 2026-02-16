const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const el = event.currentTarget.elements; 


  const formData = new FormData(event.currentTarget);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value.trim();
  });


  if (Object.values(data).some(val => val === "")) {
    return alert("All form fields must be filled in");
  }

  console.log(data);
  event.currentTarget.reset();
});
