import { useRef, useEffect } from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { BsBriefcase } from 'react-icons/bs';
import './EducationAndExperience.css';
import Timeline from '../UI/Timeline';

const EducationAndExperience = () => {
  const educationRef = useRef();
  const experienceRef = useRef();
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };

    const callbacks = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    let observer = new IntersectionObserver(callbacks, options);
    const elements = [educationRef.current, experienceRef.current];
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-10">My Journey</h1>
      <div
        id="education-experience"
        className="education-experience-wrapper flex flex-col justify-center items-center md:flex-row md:flex-start"
      >
        <div className="education fade-in" ref={educationRef}>
          <h1 className="text-3xl mb-5 text-center">
            <LuGraduationCap className="mr-2" />
            Education
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="University of Illinois Springfield, Illinois, USA"
              position="Master of Science: Healthcare Informatics"
              duration="Jan 2025 - May 2026"
              duties="Coursework: Healthcare system analysis and design, business analysis, Healthcare Information Systems Security and Privacy, Information Management, Database and Data mining"
            />
            <Timeline
              institute="Dharmsinh Desai University, Nadiad, India"
              position="Bachelor of Dental Surgery (B.D.S)"
              duration="July 2018 - Sep 2023"
              duties="Coursework: Pathology, Radiology, Pharmacology, Orthodontics, Periodontics, Public Health"
            />
          </div>
        </div>
        <div className="experience fade-in" ref={experienceRef}>
          <h1 className="text-3xl mb-5 text-center">
            <BsBriefcase className="mr-2" />
            Work Experience
          </h1>
          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="Freelance, Vancouver, BC"
              position="Medical Data Analyst & AI Validator"
              duration="03/2025 to Present"
              duties="Validated EHR-derived clinical datasets to ensure accuracy, safety, and regulatory alignment. Improved model performance by aligning AI outputs with standardized clinical documentation. Performed error analysis and translated clinical requirements into data validation rules."
            />
            <Timeline
              institute="Chesterfield Clinic, Seattle, USA"
              position="Patient Care Coordinator"
              duration="01/2024 to 02/2025"
              duties="Coordinated patient records, prescriptions, and insurance data within an electronic system. Supported patient communication and scheduling. Ensured data accuracy across EHR systems and clinical documentation."
            />
            <Timeline
              institute="Vinayak Dental Clinic, India"
              position="Dental Administrator"
              duration="11/2022 to 08/2023"
              duties="Managed front desk operations, including patient registration, appointment scheduling, and billing. Maintained digital patient records and assisted clinicians with charting and treatment documentation. Coordinated with patients regarding follow-ups, treatment plans, and insurance queries."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;
