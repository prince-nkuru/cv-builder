import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExperience from './EducationalExperience';
import PracticalExperience from './PracticalExperience';
import './CVForm.css';

const CVForm = () => {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState({});
  const [practical, setPractical] = useState({});

  const handleGeneralInfoSubmit = (info) => setGeneralInfo(info);
  const handleEducationSubmit = (info) => setEducation(info);
  const handlePracticalSubmit = (info) => setPractical(info);

  return (
    <div className="cv-form">
      <h2>General Information</h2>
      <GeneralInfo info={generalInfo} onSubmit={handleGeneralInfoSubmit} onEdit={() => {}} />
      
      <h2>Educational Experience</h2>
      <EducationalExperience info={education} onSubmit={handleEducationSubmit} onEdit={() => {}} />
      
      <h2>Practical Experience</h2>
      <PracticalExperience info={practical} onSubmit={handlePracticalSubmit} onEdit={() => {}} />
    </div>
  );
};

export default CVForm;
