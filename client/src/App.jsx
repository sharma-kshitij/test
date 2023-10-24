import { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(name, email, password);

    const response = await fetch("https://test-0ijd.onrender.com/api/register", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json()
    console.log(data)
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(e) => registerUser(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value={"Register"} />
      </form>
    </>
  );
}

export default App;
