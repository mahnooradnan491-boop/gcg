import { useState, useEffect } from 'react';
import api from '../../api.js';

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
                console.log("Database se data aya:", res.data);
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
        
        console.log("1. Frontend se yeh data bhej rahe hain ->", type, stories[type]); 

        try {
            const res = await api.put(`/success-stories/update/${type}`, {
                count: stories[type].count,
                label: stories[type].label
            })
            console.log("4. Backend ne wapas yeh response bheja ->", res.data);
            alert(`${type} updated successfully!`);
        } catch (err) {
            console.error("Update error:", err);
            alert("Failed to update");
        }
    };

    return (
        <div className="content-card p-5 bg-white rounded-4 shadow-sm">
            <h4 className="fw-bold mb-4">Manage Success Stories</h4>
            
            {['regular', 'graduate', 'research'].map((type) => (
                <div key={type} className="row g-3 mb-4 align-items-end border-bottom pb-3">
                    <div className="col-md-4">
                        <label className="fw-bold small text-capitalize">{type} Count</label>
                        <input 
                            className="form-control" 
                            value={stories[type]?.count || ''}
                            onChange={(e) => handleChange(type, 'count', e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="fw-bold small">Label</label>
                        <input 
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