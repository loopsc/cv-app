export default function EducationForm({ data, onChange, onAdd }) {
    return (
        <div className="form-group general-info">
            <h1>Education & Qualifications</h1>
            <input
                type="text"
                placeholder="Insitution"
                value={data.institution}
                onChange={(e) => onChange({institution: e.target.value})}
            />
            <input
                type="text"
                placeholder="Qualification"
                value={data.qualification}
                onChange={(e) => onChange({qualification: e.target.value})}
            />
            <div className="dates-container">
                <div className="label-input">
                    <label htmlFor="edu-start-date">Start Date:</label>
                    <input
                        id="edu-start-date"
                        type="date"
                        value={data.eduStart}
                        onChange={(e) => onChange({eduStart: e.target.value})}
                    />
                </div>

                <div className="label-input">
                    <label htmlFor="edu-end-date">End Date:</label>
                    <input
                        id="edu-end-date"
                        type="date"
                        value={data.eduEnd}
                        onChange={(e) => onChange({eduEnd: e.target.value})}
                    />
                </div>
            </div>
            <button type="button" onClick={onAdd}>Add</button>
        </div>
    );
}
