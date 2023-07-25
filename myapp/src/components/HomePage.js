import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
function HomePage({ translations}) {
        

          const handleLearnMoreClick = () => {
          window.location.href = '/about';//learn more
          };

  return (
    <div>
      <div className="image">
        <img src='/images/School.jpg' alt='image1' />
      </div>

      
      <section className="info">
        <div className="info-content">
          <h2>{translations.welcome}</h2>
          <p>{translations.info}</p>
          
          <button onClick={handleLearnMoreClick}>{translations.learn}</button>
        
        </div>
      </section>

    
      <section className="events-news">
        <div>
          <h3>{translations.eventheader}</h3>
        </div>
        <div >
          <ul>
            <li>{translations.event}</li>
            <li>{translations.news}</li>
          
          </ul>
        </div>
      </section>

    
      <section className="social">
        <div>
          <h3>{translations.social}</h3>
        </div>
        <div className="section-content">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
