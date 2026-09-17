import { useState, useEffect } from 'react';
import api from '../../api.js';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ManageSuccessStories() {
    const [stories, setStories] = useState({
        regular: { count: '', label: '' },
        graduate: { count: '', label: '' },
        research: { count: '', label: '' }
    });

    useEffect(() => {
        const loadStories = async () => {
            try {
                const res = await api.get('/success-stories');
                const formatted = {};
                res.data.forEach(item => {
                    formatted[item.type] = { count: item.count, label: item.label };
                });
                setStories(prev => ({ ...prev, ...formatted }));
            } catch (err) {
                console.error("Error loading stories", err);
            }
        };
        loadStories();
    }, []);

    const handleChange = (type, field, value) => {
        setStories(prev => ({
            ...prev,
            [type]: { ...prev[type], [field]: value }
        }));
    };

    const handleUpdate = async (type) => {
        try {
            const res = await api.put(`/success-stories/update/${type}`, {
                count: stories[type].count,
                label: stories[type].label
            });
            alert(`${type} updated successfully!`);
        } catch (err) {
            console.error("Update error:", err);
            alert("Failed to update");
        }
    };

    
    const chartData = {
        labels: ['Regular', 'Graduate', 'Research'],
        datasets: [
            {
                label: 'Success Counts Overview',
                data: [
                    Number(stories.regular.count) || 0,
                    Number(stories.graduate.count) || 0,
                    Number(stories.research.count) || 0
                ],
                backgroundColor: [
                    'rgba(40, 167, 69, 0.7)',   
                    'rgba(13, 110, 253, 0.7)',  
                    'rgba(255, 193, 7, 0.7)'    
                ],
                borderColor: [
                    'rgb(40, 167, 69)',
                    'rgb(13, 110, 253)',
                    'rgb(255, 193, 7)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Success Stories Statistics Chart',
            },
        },
    };

    return (
        <div className="content-card p-5 bg-white rounded-4 shadow-sm">
            <h4 className="fw-bold mb-4">Manage Success Stories & Overview</h4>

            <div className="mb-5 p-3 bg-light rounded-4 shadow-sm">
                <Bar data={chartData} options={chartOptions} />
            </div>

            {['regular', 'graduate', 'research'].map((type) => (
                <div key={type} className="row g-3 mb-4 align-items-end border-bottom pb-3">
                    <div className="col-md-4">
                        <label className="fw-bold small text-capitalize">{type} Count</label>
                        <input
                            type="number"
                            className="form-control"
                            value={stories[type]?.count || ''}
                            onChange={(e) => handleChange(type, 'count', e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="fw-bold small">Label</label>
                        <input
                            type="text"
                            className="form-control"
                            value={stories[type]?.label || ''}
                            onChange={(e) => handleChange(type, 'label', e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <button
                            className="btn btn-success w-100"
                            onClick={() => handleUpdate(type)}
                        >
                            Update {type}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ManageSuccessStories;