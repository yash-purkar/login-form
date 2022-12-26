import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allData, setAllData] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    if (email && password) {
      const newData = {
        email: email,
        password: password
      }
      // console.log(newData)
      setAllData([...allData, newData]);
    }
    else {
      alert("Plzz fill the all data first.")
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
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

      <div>
        {
          allData.map((currElem, indexNo) => {
            return (
              <div key={indexNo}>
                <h3>{currElem.email} {currElem.password}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoginForm;