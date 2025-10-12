export default function WorkExperienceForm({ data, onChange }) {
    return (
        <div className="form-group general-info">
            <h1>Work Experience</h1>
            <input
                type="text"
                placeholder="Company Name"
                value={data.company}
                onChange={(e) => onChange({company: e.target.value})}
            />
            <input
                type="text"
                placeholder="Position"
                value={data.position}
                onChange={(e) => onChange({position: e.target.value})}
            />
            <input
                type="text"
                placeholder="Responsibilities (Use ',' to separate)"
                value={data.responsibilities}
                onChange={(e) => onChange({responsibilities: e.target.value})}
            />
            <div className="dates-container">
                {/* Start */}
                <div className="label-input">
                    <label htmlFor="work-start-date">Start Date:</label>
                    <input
                        id="work-start-date"
                        type="date"
                        value={data.workStart}
                        onChange={(e) => onChange({workStart: e.target.value})}
                    />
                </div>
                {/* End */}
                <div className="label-input">
                    <label htmlFor="work-end-date">End Date:</label>
                    <input
                        id="work-end-date"
                        type="date"
                        value={data.workEnd}
                        onChange={(e) => onChange({workEnd: e.target.value})}
                    />
                </div>
            </div>
        </div>
    );
}
