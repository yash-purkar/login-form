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
    <div className="main-div">
      <form onSubmit={submitForm} className="form-container">
        <h1 id="heading">Login Here</h1>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Email"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Password" />
        </div>

        <button type="submit" id="submit-btn">Login</button>
      </form>

      <div>
        {
          allData.map((currElem, indexNo) => {
            return (
              <div key={indexNo} id="output">
                <p id="output-email">{currElem.email}</p>
                <p >{currElem.password}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoginForm;