import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './services.css';

export default function Services() {
  const [activeService, setActiveService] = useState('recommendation');
  const previewRef = useRef(null);

  const [formData, setFormData] = useState({
    
    studentName: '',
    rollNumber: '',
    degree: '',
    instituteName: 'Government Graduate Collage for boys',
    recommenderName: '',
    recommenderTitle: '',
    academicPerformance: '',
    skills: '',

    characterDuration: '4 years',
    conductRating: 'exemplary',
    issueDate: new Date().toISOString().split('T')[0],

    teacherName: '',
    designation: '',
    department: '',
    startDate: '',
    endDate: '',
    keyResponsibilities: 'delivering lectures on MERN stack web development, mentoring final year capstone projects, and coordinating departmental academic affairs',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownloadPdf = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0.5,
      filename: `${activeService}_${Date.now()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app-container">
      <div className="main-wrapper">
      
        <header className="portal-header">
          <h1 className="portal-title">Academic Document Portal</h1>
          <div className="service-nav">
            <button
              onClick={() => setActiveService('recommendation')}
              className={`nav-btn ${activeService === 'recommendation' ? 'active' : ''}`}
            >
              Recommendation Letter
            </button>
            <button
              onClick={() => setActiveService('character')}
              className={`nav-btn ${activeService === 'character' ? 'active' : ''}`}
            >
              Character Certificate
            </button>
            <button
              onClick={() => setActiveService('experience')}
              className={`nav-btn ${activeService === 'experience' ? 'active' : ''}`}
            >
              Teacher Experience Letter
            </button>
          </div>
          <button onClick={handleDownloadPdf} className="download-btn">
            Download PDF
          </button>
        </header>

        <main className="split-grid">
        
          <div className="card">
            <h2 className="card-title">Fill Document Details</h2>

            <form className="doc-form">
              {activeService === 'recommendation' && (
                <>
                  <div className="form-group">
                    <label>Student Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Roll Number</label>
                      <input
                        type="text"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Degree Program</label>
                      <input
                        type="text"
                        name="degree"
                        value={formData.degree}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Institution Name</label>
                    <input
                      type="text"
                      name="instituteName"
                      value={formData.instituteName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Academic Rating</label>
                    <select
                      name="academicPerformance"
                      value={formData.academicPerformance}
                      onChange={handleChange}
                    >
                      <option value="outstanding">Outstanding</option>
                      <option value="excellent">Excellent</option>
                      <option value="very good">Very Good</option>
                      <option value="satisfactory">Satisfactory</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Key Competencies / Skills</label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Recommender Name</label>
                      <input
                        type="text"
                        name="recommenderName"
                        value={formData.recommenderName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Designation / Title</label>
                      <input
                        type="text"
                        name="recommenderTitle"
                        value={formData.recommenderTitle}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </>
              )}
              {activeService === 'character' && (
                <>
                  <div className="form-group">
                    <label>Student Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Roll Number</label>
                      <input
                        type="text"
                        name="rollNumber"
                        value={formData.rollNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Tenure Duration</label>
                      <input
                        type="text"
                        name="characterDuration"
                        value={formData.characterDuration}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Conduct Rating</label>
                    <select
                      name="conductRating"
                      value={formData.conductRating}
                      onChange={handleChange}
                    >
                      <option value="exemplary">Exemplary</option>
                      <option value="very good">Very Good</option>
                      <option value="good">Good</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Issue Date</label>
                    <input
                      type="date"
                      name="issueDate"
                      value={formData.issueDate}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {activeService === 'experience' && (
                <>
                  <div className="form-group">
                    <label>Teacher Name</label>
                    <input
                      type="text"
                      name="teacherName"
                      value={formData.teacherName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Designation</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Department</label>
                      <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Start Date</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>End Date</label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Key Responsibilities</label>
                    <textarea
                      name="keyResponsibilities"
                      rows={3}
                      value={formData.keyResponsibilities}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
            </form>
          </div>

          <div className="card">
            <h2 className="card-title">Document Live Preview</h2>

            <div ref={previewRef} className="document-paper">
              
              <div className="doc-header">
                <h3 className="institution-title">
                  {formData.instituteName || 'ACADEMIC INSTITUTION'}
                </h3>
                <p className="document-subtitle">OFFICIAL INSTITUTIONAL DOCUMENT</p>
              </div>

              {activeService === 'recommendation' && (
                <div className="doc-body">
                  <div className="doc-date">
                    Date: {new Date().toLocaleDateString()}
                  </div>
                  <h4 className="doc-heading">Letter of Recommendation</h4>
                  <p>To Whom It May Concern,</p>
                  <p>
                    It is my distinct pleasure to write this letter of recommendation for{' '}
                    <u><strong>{formData.studentName || '[Student Name]'}</strong></u>{' '}
                    (Roll No: <strong>{formData.rollNumber || '[Roll No]'}</strong>), who pursued their studies in{' '}
                    <strong>{formData.degree || '[Degree]'}</strong> at our institution.
                  </p>
                  <p>
                    During their academic tenure, they demonstrated <strong>{formData.academicPerformance}</strong> performance 
                    and shown consistent dedication to learning. Their technical expertise and mastery in{' '}
                    <strong>{formData.skills || '[Skills]'}</strong> distinguish them as a highly capable individual.
                  </p>
                  <p>
                    I strongly recommend {formData.studentName || 'the student'} for future academic endeavors or professional placements.
                  </p>
                  <div className="signature-block">
                    <div className="signatory-name">{formData.recommenderName || '[Recommender Name]'}</div>
                    <div className="signatory-title">{formData.recommenderTitle || '[Title]'}</div>
                  </div>
                </div>
              )}

              {activeService === 'character' && (
                <div className="doc-body">
                  <div className="doc-date">Date: {formData.issueDate}</div>
                  <h4 className="doc-heading">Character Certificate</h4>
                  <p style={{ marginTop: '2rem' }}>
                    This is to certify that <strong>{formData.studentName || '[Student Name]'}</strong>, holding 
                    Roll No: <strong>{formData.rollNumber || '[Roll No]'}</strong>, was a bona fide student 
                    of this institution for a duration of <strong>{formData.characterDuration || '[Duration]'}</strong>.
                  </p>
                  <p>
                    To the best of my knowledge and belief, they bear a moral character and displayed{' '}
                    <strong>{formData.conductRating}</strong> conduct throughout their stay at this institution.
                  </p>
                  <p>We wish them every success in their future endeavors.</p>
                  <div className="certificate-footer">
                    <div className="seal-box">Issuing Authority</div>
                    <div className="seal-box">Official Seal</div>
                  </div>
                </div>
              )}

              {activeService === 'experience' && (
                <div className="doc-body">
                  <div className="doc-date">
                    Date: {new Date().toLocaleDateString()}
                  </div>
                  <h4 className="doc-heading">Experience Certificate</h4>
                  <p>To Whom It May Concern,</p>
                  <p>
                    This certificate confirms that <strong>{formData.teacherName || '[Teacher Name]'}</strong> was 
                    employed at our institution as a <strong>{formData.designation || '[Designation]'}</strong> in the 
                    Department of <strong>{formData.department || '[Department]'}</strong> from{' '}
                    <strong>{formData.startDate || '[Start Date]'}</strong> to{' '}
                    <strong>{formData.endDate || '[End Date]'}</strong>.
                  </p>
                  <p>
                    During their tenure, their core responsibilities included{' '}
                    <strong>{formData.keyResponsibilities || '[Responsibilities]'}</strong>.
                  </p>
                  <p>
                    They executed their duties with utmost dedication, professionalism, and integrity. We appreciate 
                    their contributions and wish them success in future endeavors.
                  </p>
                  <div className="signature-block">
                    <div className="signatory-name">Head of Administration</div>
                    <div className="signatory-title">{formData.instituteName || '[Institution Name]'}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}