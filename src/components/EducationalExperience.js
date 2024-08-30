import React, { useState } from 'react';
import './EducationalExperience.css';

const EducationalExperience = ({ onSubmit, info, onEdit }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    school: info.school || '',
    study: info.study || '',
    date: info.date || '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    onEdit();
  };

  return (
    <div className="educational-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="school" placeholder="School Name" value={form.school} onChange={handleChange} />
          <input type="text" name="study" placeholder="Title of Study" value={form.study} onChange={handleChange} />
          <input type="date" name="date" value={form.date} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {info.school}</p>
          <p>Study: {info.study}</p>
          <p>Date: {info.date}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationalExperience;
