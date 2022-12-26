import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;