import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  // State for dynamic skills and photos
  const [skills, setSkills] = useState([
    'Java', 'HTML', 'JavaScript', 'CSS', 'Windows OS', 'Computer Hardware Assembly', 'IT Troubleshooting', 'Microsoft Office Suite'
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [photos, setPhotos] = useState([]);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    setPhotos([...photos, ...files.map(file => URL.createObjectURL(file))]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mustafa Khan</h1>
        <p>Elk Grove, CA 95757 | (916)-579-1541 | mustafa.munir4411@gmail.com</p>
        <div className="resume-section">
          <h2>Education</h2>
          <p><b>Bachelor of Science in Computer Engineering</b><br />Sacramento State University<br />Expected Graduation: 2027</p>
          <p><b>Relevant Coursework:</b> Intro to Programming, Intro to Java, Programming Concepts and Methodology, Intro to Assembly, Introduction to Engineering</p>
        </div>
        <div className="resume-section">
          <h2>Professional Experience</h2>
          <b>Sky Zone Court Monitor</b> | Elk Grove, CA | Aug 2024 – Present
          <ul>
            <li>Supervise trampoline courts, enforce rules, and ensure guest safety for 200–300 guests daily.</li>
            <li>Resolve guest issues, maintain operational efficiency, and demonstrate strong situational awareness.</li>
            <li>Collaborate with team and management for effective communication and task coordination.</li>
            <li>Exhibit professionalism and resilience in high-pressure environments.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Projects</h2>
          <ul>
            <li><b>Java Vehicle Management Program</b> (Fall 2023): OOP Vehicle class, encapsulation, constructors, toString, dynamic object creation.</li>
            <li><b>Cafe Menu Styling</b> (Fall 2023): Designed a cafe menu using HTML/CSS, focused on layout and responsive formatting.</li>
            <li><b>Web Design Projects</b> (2023–2024): Café menu and registration form, explored responsive design and usability.</li>
            <li><b>Custom PC Build & Troubleshooting</b> (2023–2025): Assembled PCs, diagnosed hardware issues, resolved startup errors, and maintained inventory.</li>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Technical Skills</h2>
          <ul>
            {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
          <div className="add-skill">
            <input
              type="text"
              value={newSkill}
              onChange={e => setNewSkill(e.target.value)}
              placeholder="Add a new skill..."
            />
            <button onClick={addSkill}>Add Skill</button>
          </div>
        </div>
        <div className="resume-section">
          <h2>Soft Skills</h2>
          <ul>
            <li>Customer Service & Engagement</li>
            <li>Verbal & Written Communication</li>
            <li>Team Collaboration</li>
            <li>Problem-Solving</li>
            <li>Resilience Under Pressure</li>
            <li>Eagerness to Learn</li>
          </ul>
        </div>
        <div className="resume-section">
          <h2>Photo Gallery (Car Shows & More)</h2>
          <input type="file" multiple accept="image/*" onChange={handlePhotoUpload} />
          <div className="photo-gallery">
            {photos.length === 0 && <p style={{color: '#aaa'}}>No photos yet. Upload your car show or personal photos here!</p>}
            {photos.map((src, idx) => (
              <img src={src} alt={`User upload ${idx+1}`} className="car-photo" key={idx} />
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
