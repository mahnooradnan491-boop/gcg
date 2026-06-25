import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

function BatchChart() {
  const { batchId } = useParams()
  const navigate = useNavigate();

  
  const batchDataMapping = {
    '2026': [
      { name: 'Passed', students: 85, color: '#419a51' },
      { name: 'Failed', students: 15, color: '#dc3545' }
    ],
    '2025': [
      { name: 'Passed', students: 78, color: '#419a51' },
      { name: 'Failed', students: 22, color: '#dc3545' }
    ],
    '2024': [
      { name: 'Passed', students: 90, color: '#419a51' },
      { name: 'Failed', students: 10, color: '#dc3545' }
    ],
    '2023': [
      { name: 'Passed', students: 82, color: '#419a51' },
      { name: 'Failed', students: 18, color: '#dc3545' }
    ]
  };

  
  const data = batchDataMapping[batchId] || batchDataMapping['2026'];

  return (
    <div className="container my-5 py-4" style={{ backgroundColor: '#f8f9fa', minHeight: '80vh', borderRadius: '20px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">
        <h3 className="fw-bold text-dark">
          Pass Ratio Analytics - <span className="text-success">Fall Batch {batchId}</span>
        </h3>
        <button className="btn btn-outline-success px-4 fw-bold" onClick={() => navigate(-1)}>
          ← Back to Achievements
        </button>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 p-4 rounded-4 bg-white">
            <h5 className="fw-bold mb-4 text-muted">Visual Representation (Students Count)</h5>
            <div style={{ width: '100%', height: 350 }}>
              <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#4a5568', fontWeight: 'bold' }} />
                  <YAxis />
                  <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
                  <Legend />
                  <Bar dataKey="students" radius={[10, 10, 0, 0]} maxBarSize={80}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-4 rounded-4 bg-white h-100 d-flex flex-column justify-content-center">
            <h5 className="fw-bold mb-3 text-dark">Quick Summary</h5>
            <hr />
            <div className="d-flex justify-content-between my-2 fs-5">
              <span className="text-success fw-bold">✓ Passed:</span>
              <span className="fw-bold">{data[0].students}%</span>
            </div>
            <div className="d-flex justify-content-between my-2 fs-5">
              <span className="text-danger fw-bold">✗ Failed / Re-appear:</span>
              <span className="fw-bold">{data[1].students}%</span>
            </div>
            <div className="bg-success bg-opacity-10 text-success p-3 rounded-3 mt-4 text-center small fw-semibold">
              This report is verified by the examination controller cell.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchChart