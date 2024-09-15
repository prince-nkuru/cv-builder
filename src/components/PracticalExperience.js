import React, { useState } from 'react';
import './PracticalExperience.css';

const PracticalExperience = ({ onSubmit, info, onEdit }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    company: info.company || '',
    position: info.position || '',
    responsibilities: info.responsibilities || '',
    dateFrom: info.dateFrom || '',
    dateTo: info.dateTo || '',
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
    <div className="practical-experience">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} />
          <input type="text" name="position" placeholder="Position Title" value={form.position} onChange={handleChange} />
          <textarea name="responsibilities" placeholder="Main Responsibilities" value={form.responsibilities} onChange={handleChange}></textarea>
          <input type="date" name="dateFrom" value={form.dateFrom} onChange={handleChange} />
          <input type="date" name="dateTo" value={form.dateTo} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {info.company}</p>
          <p>Position: {info.position}</p>
          <p>Responsibilities: {info.responsibilities}</p>
          <p>Date From: {info.dateFrom}</p>
          <p>Date To: {info.dateTo}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PracticalExperience;
