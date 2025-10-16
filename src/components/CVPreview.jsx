export default function CVPreview({ data }) {
    return (
        <div className="cv">
            <div className="output general-info">
                <h1>General Info</h1>
                <p>{"Name: " + data.general.name}</p>
                <p>{"Address: " + data.general.address}</p>
                <p>{"Number: " + data.general.number}</p>
                <p>{"Email: " + data.general.email}</p>
            </div>
            <div className="output education">
                <h1>Education & Qualifications</h1>
                {data.education.map((edu, index) => (
                    <div key={index} className="education-entry">
                        <p>Institution: {edu.institution}</p>
                        <p>Qualification: {edu.qualification}</p>
                        <p>Start: {edu.eduStart}</p>
                        <p>End: {edu.eduEnd}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <div className="output job-experience">
                <h1>Job Experience</h1>
                {data.experience.map((job, index) => (
                    <div key={index} className="job-entry">
                        <p>Company: {job.company}</p>
                        <p>Position: {job.position}</p>
                        <p>Responsibilities: {job.responsibilities}</p>
                        <p>Start: {job.workStart}</p>
                        <p>End: {job.workEnd}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
