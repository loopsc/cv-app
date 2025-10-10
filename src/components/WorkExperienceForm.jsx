export default function WorkExperienceForm({ data, onChange }) {
    return (
        <div className="form-group general-info">
            <h1>Work Experience</h1>
            <input
                type="text"
                placeholder="Company Name"
                value={data.institution}
                onChange={(e) => onChange(e.target.value)}
            />
            <input
                type="text"
                placeholder="Position"
                value={data.qualification}
                onChange={(e) => onChange(e.target.value)}
            />
            <input
                type="date"
                placeholder="Responsibilities"
                value={data.studyStart}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="dates-container">
                {/* Start */}
                <div className="label-input">
                    <label htmlFor="edu-start-date">Start Date:</label>
                    <input
                        id="work-start-date"
                        type="date"
                        value={data.workStart}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </div>
                {/* End */}
                <div className="label-input">
                    <label htmlFor="edu-end-date">End Date:</label>
                    <input
                        id="work-end-date"
                        type="date"
                        value={data.workEnd}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
