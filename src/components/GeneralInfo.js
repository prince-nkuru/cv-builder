import React, { useState } from 'react';
import './GeneralInfo.css';

const GeneralInfo = ({ onSubmit, info, onEdit }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [form, setForm] = useState({
    name: info.name || '',
    email: info.email || '',
    phone: info.phone || '',
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
    <div className="general-info">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
