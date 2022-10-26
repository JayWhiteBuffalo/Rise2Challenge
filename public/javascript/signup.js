//signup form handler
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const age = document.querySelector("#age-signup").value.trim();
  const height = document.querySelector("#height-signup").value.trim();
  const weight_in_lbs = document.querySelector("#weight-signup").value.trim();
  const gender = document.querySelector('#gender-signup').value.trim();

  if (username && email && password && age && height && weight_in_lbs && gender) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
        age,
        height,
        weight_in_lbs,
        gender
      }),
      headers: { "Content-Type": "application/json" },
    });

    // check the response status
    if (response.ok) {
      console.log("success");
      document.location.replace('/build-workout');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
