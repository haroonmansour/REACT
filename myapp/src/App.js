
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import CoursePage from './components/CoursePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import './App.css';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

function App() {
  
  const [language, setLanguage] = useState('en'); 
  const translations = language === 'en' ? enTranslations : arTranslations;
  
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    
    <Router>
      <div className={language === 'ar' ? 'rtl-layout' : 'ltr-layout'}>
      
        <header>
          <h1>{translations.schoolName}</h1>
          <nav>
            <ul>
              <li><a href="/">{translations.home}</a></li>
              <li><a href="/about">{translations.about}</a></li>
              <li><a href="/contact">{translations.contact}</a></li>
              <li><a href="/course">{translations.courses}</a></li>
              <li className='right'>
                <a href="/Login" >{translations.signIn}</a>
                <a href="/sign-Up" >{translations.signUp}</a>
              </li>
              
              </ul>
          </nav>
        </header>

        
        <Switch>
          <Route exact path="/" component={HomePage} >
          <HomePage translations={translations}/>
          </Route>
          <Route path="/about" component={AboutPage} >
          <AboutPage translations={translations} />
          </Route>
          <Route path="/contact" component={ContactPage} >
          <ContactPage translations={translations} />
          </Route>
          <Route path="/course" component={CoursePage}>
          <CoursePage translations={translations}  />
          </Route>
          <Route path="/Login" component={LoginPage}>
          <LoginPage translations={translations} />
          </Route>
          <Route path="/sign-UP" component={SignUpPage}>
          <SignUpPage translations={translations} />
          </Route>
        </Switch>

        
        <footer>
<div className="language">
  <select id="language-select" onChange={handleLanguageChange}>
    <option value="en">English</option>
    <option value="ar">Arabic</option>
  </select>
</div>
          <p>&copy; {translations.rights}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
