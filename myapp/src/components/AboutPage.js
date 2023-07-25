import React from 'react';
import './AboutPage.css';
function AboutPage({ translations}) {
  return (
<div>
  <section className='aboutimg'>
    <div className='imageab'>
    <img src='./images/about.jpg' alt='about'/>

    </div>
    </section>

      <section className='about'>
      
      <div className='headab'>
        <h1>{translations.welcome}</h1><br/>
      </div>  

      <div className='parab'>
        <p>{translations.p1}</p>
        <p>{translations.p2}</p>
        <p>{translations.p3}</p>
        <p>{translations.p4}</p>
        <p>{translations.p5}</p>
        <div className='pp'>
        <p>{translations.p6}</p>
        <p>{translations.p7}</p>
        </div>
        
      </div>
      </section>
</div>

  );
}

export default AboutPage;