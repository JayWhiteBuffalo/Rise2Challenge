//signup form handler
async function userInfoFormHandler(event) {
    event.preventDefault();
  
    const age = document.querySelector("#age-signup").value.trim();
    const height = document.querySelector("#height-signup").value.trim();
    const weight = document.querySelector("#weight-signup").value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
  
    if (age && height && weight && email) {
      const response = await fetch("/api/profile", {
        method: "post",
        body: JSON.stringify({
          age,
          height,
          weight,
          gender,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      // check the response status
      if (response.ok) {
        console.log("success");
        document.location.replace('/')
      } else {
        alert(response.statusText);
      }
    }
}

document
  .querySelector(".UI-form")
  .addEventListener("submit", userInfoFormHandler);