import React from 'react';
import './LoginPage.css';
function LoginPage({ translations}) {
  return (

    <div className="login">
      <div className="form">
        <h2>{translations.login}</h2><br/>
        <form>
          <div className="formItem">
            <label>{translations.email}</label>
            <input type="email" id="email" required />
          </div>
          <div className="formItem">
            <label>{translations.password}</label>
            <input type="password" id="password" required />
          </div>
          <div className="submit">
            <button type="submit">{translations.login}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;