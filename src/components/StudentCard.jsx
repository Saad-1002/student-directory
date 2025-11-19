import React from "react";
import "../index.css"; // or import specific css file

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <div className="student-card">
      <div className="card-header">
        <h3 className="student-name">{name}</h3>
        <span className={`status-badge ${isActive ? "active" : "inactive"}`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="meta"><strong>Roll:</strong> {rollNumber} · <strong>Course:</strong> {course}</p>
      <p className="email"><a href={`mailto:${email}`}>{email}</a></p>

      <div className="skills">
        {skills.map((skill, idx) => (
          <span key={`${rollNumber}-skill-${idx}`} className="skill-badge">{skill}</span>
        ))}
      </div>
    </div>
  );
}
