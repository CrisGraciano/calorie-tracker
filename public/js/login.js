async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email, password)
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({

        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
  }
}

document.querySelector("#loginForm").addEventListener("submit", loginFormHandler)