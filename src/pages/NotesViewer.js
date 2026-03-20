import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "../pages.css";
const NotesViewer = () => {
  const { university, semester, subject } = useParams();

  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`https://noteshubbackend.vercel.app/api/notes/${university}/${semester}/${subject}`)
      .then(res => res.json())
      .then(data => setFiles(data.files))
      .catch(err => console.log(err));
  }, [university, semester, subject]);

  return (
    <div className="page-wrapper">
      <main className="page-container-main">

        <div className="hero-card">
          <h1 className="hero-title">
            {subject.toUpperCase()} Notes
          </h1>
        </div>

        <div className="notes-grid">
          {files.map((file) => (
            <div key={file} className="notes-card">

              <h3 className="card-title">{file}</h3>

              <a
                href={`https://noteshubbackend.vercel.app/notes/${university}/${semester}/${subject}/${file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="notes-btn mu"
              >
                Open →
              </a>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default NotesViewer;
