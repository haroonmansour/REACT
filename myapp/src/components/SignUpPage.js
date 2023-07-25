import React from 'react';
import './SignUpPage.css';

function SignUpPage({ translations}) {
  return (
    <div className="sign-up">
    <div className="form">
      <h2>{translations.signUp}</h2><br/>
      <form>
        <div className="formItem">
          <label htmlFor="firstName">{translations.first}</label>
          <input type="text" id="firstName" required />
        </div>
        <div className="formItem">
          <label>{translations.last}</label>
          <input type="text" id="lastName" required />
        </div>
        <div className="formItem">
          <label>{translations.email}</label>
          <input type="email" id="email" required />
        </div>
        <div className="formItem">
          <label>{translations.birthday}</label>
          <input type="date" id="birthday" required />
        </div>
        <div className="formItem">
          <label >{translations.address}</label>
          <input type="text" id="address" required />
        </div>
        <div className="formItem">
          <label >{translations.phone}</label>
          <input type="tel" id="phoneNumber" required />
        </div>
        <div className="formItem">
          <label>{translations.reason}</label>
          <textarea id="signOutReason" required />
        </div>
        <div className="submit">
          <button type="submit">{translations.signUp}</button>
        </div>
      </form>
    </div>
    </div>

  );
}

export default SignUpPage;