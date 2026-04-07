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
      if (element) observer.observe(element);
    });
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-10">My Journey</h1>

      <div
        id="education-experience"
        className="education-experience-wrapper flex flex-col justify-center items-center md:flex-row md:flex-start"
      >
        {/* EDUCATION */}
        <div className="education fade-in" ref={educationRef}>
          <h1 className="text-3xl mb-5 text-center">
            <LuGraduationCap className="mr-2 inline" />
            Education
          </h1>

          <div className="timeline-wrapper flex flex-col">
            <Timeline
              institute="University of Illinois Springfield, Illinois, USA"
              position="Master of Science: Healthcare Informatics"
              duration="Jan 2025 - May 2026"
              duties="Coursework: Healthcare system analysis and design, Business analysis, Healthcare Information Systems Security & Privacy, Information Management, Database & Data Mining"
            />

            <Timeline
              institute="Dharmsinh Desai University, Nadiad, India"
              position="Bachelor of Dental Surgery (B.D.S)"
              duration="July 2018 - Sep 2023"
              duties="Coursework: Pathology, Radiology, Pharmacology, Orthodontics, Periodontics, Public Health"
            />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="experience fade-in" ref={experienceRef}>
          <h1 className="text-3xl mb-5 text-center">
            <BsBriefcase className="mr-2 inline" />
            Work Experience
          </h1>

          <div className="timeline-wrapper flex flex-col">

            <Timeline
              institute="Freelance, Vancouver, BC"
              position="Data Analyst / AI Validator"
              duration="03/2025 to Present"
              duties="• Evaluated AI-generated outputs and validated data accuracy across projects.
• Identified data inconsistencies and improved output quality by 20% through root cause analysis.
• Developed validation rules and documentation to standardize processes.
• Delivered performance reports and insights to support continuous improvement."
            />

            <Timeline
              institute="University of Illinois Springfield, Springfield, IL"
              position="Research Associate"
              duration="02/2025 to 02/2026"
              duties="• Executed end-to-end projects including predictive modeling and exploratory analysis.
• Analyzed telehealth/eHealth platforms to evaluate performance and user behavior.
• Applied statistical techniques to identify trends and insights.
• Prepared reports and supported research documentation."
            />

            <Timeline
              institute="Tangy Tadka, Seattle, WA"
              position="Quality Control Specialist"
              duration="09/2023 to 03/2025"
              duties="• Conducted quality inspections and ensured compliance with safety standards.
• Monitored processes to maintain consistency and identify improvements.
• Maintained audit documentation and supported quality initiatives."
            />

            <Timeline
              institute="Chesterfield Clinic, USA"
              position="Operations Coordinator"
              duration="01/2024 to 02/2025"
              duties="• Managed scheduling, workflow, and daily operations in a high-volume setting.
• Maintained accurate records and conducted routine data audits.
• Improved efficiency through cross-functional coordination.
• Trained new staff on systems and operational procedures."
            />

            <Timeline
              institute="Vinayak Dental Clinic, India"
              position="Operations Manager"
              duration="11/2021 to 08/2023"
              duties="• Oversaw end-to-end clinic operations including scheduling and inventory.
• Led a team of 5–8 staff ensuring productivity and process adherence.
• Implemented workflow improvements increasing efficiency by 15%.
• Managed documentation, reporting, and compliance processes."
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default EducationAndExperience;