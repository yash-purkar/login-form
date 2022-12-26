function loginForm() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="password">Password : </label>
          <input type="password" id="password" autoComplete="off" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default loginForm;