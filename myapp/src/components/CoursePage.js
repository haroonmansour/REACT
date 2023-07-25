import React from 'react';
import './CoursePage.css';

function CoursePage({ translations}) {
  return (
    <div className="course">
      <h2>{translations.Courses}</h2><br/>
      <div className="course-list">
        <div className="course-item">
          <h3>{translations.course} 1</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 2</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 3</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 4</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 5</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 6</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 7</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 8</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 9</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 10</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 11</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 12</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 13</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 14</h3>
          <p>#####################################################</p>
        </div>
        <div className="course-item">
          <h3>{translations.course} 15</h3>
          <p>#####################################################</p>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;