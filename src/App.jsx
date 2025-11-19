import React from "react";
import StudentCard from "./components/StudentCard";
import { activeStudents, alumni } from "./data/students";
import "./index.css";

function mostCommonSkill(allStudents) {
  const freq = {};
  allStudents.forEach(s => s.skills.forEach(skill => {
    freq[skill] = (freq[skill] || 0) + 1;
  }));
  let common = null;
  let max = 0;
  for (const k in freq) if (freq[k] > max) { max = freq[k]; common = k; }
  return common || "N/A";
}

export default function App() {
  const all = [...activeStudents, ...alumni];
  const total = all.length;
  const activeCount = activeStudents.length;
  const alumniCount = alumni.length;
  const commonSkill = mostCommonSkill(all);
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <section className="stats">
        <p><strong>Total students:</strong> {total}</p>
        <p><strong>Active:</strong> {activeCount} · <strong>Alumni:</strong> {alumniCount}</p>
        <p><strong>Most common skill:</strong> {commonSkill}</p>
      </section>

      <section className="group">
        <h2>Active Students</h2>
        <div className="grid">
          {activeStudents.map(student => (
            <StudentCard key={student.rollNumber} {...student} />
          ))}
        </div>
      </section>

      <section className="group">
        <h2>Alumni</h2>
        <div className="grid">
          {alumni.map(student => (
            <StudentCard key={student.rollNumber} {...student} />
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Yenepoya Institution — AIML · Contact: your.email@example.com</p>
        <p>© {year} Student Portal</p>
      </footer>
    </div>
  );
}
