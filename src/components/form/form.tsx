export function Form() {
  let template = (
    <form
      action="
        "
    >
      <header className="form__header">
        <h2 className="form__title"> Login</h2>
        <p className="form__legend">
          Por favor introduce tu e-mail y contraseña
        </p>
      </header>
      <div className="for__item">
        <input
          type="email"
          className="form__input"
          placeholder="Email"
          aria-label="Email"
          autoFocus
          required
        />
        <label className="form_floating-label">Email</label>
      </div>
      <div className="for__item">
        <input
          type="password"
          className="form__input"
          placeholder="Password"
          aria-label="Password"
          required
        />
        <label className="form_floating-label">Password</label>
      </div>
    </form>
  );
  return template;
}
