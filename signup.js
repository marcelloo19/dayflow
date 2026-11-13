const { createClient } = supabase;

const db = createClient(
  "https://zdfbsisxwaomlujbxzsq.supabase.co",
  "sb_publishable_gtJ69o7FJmi0VK1SZgvjbg_szDoUtFo"
);

const form = document.getElementById("signup-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await db.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullname
      }
    }
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Account created! Check your email.");
  }
});