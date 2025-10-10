export default function CVPreview({ data }) {
    return (
        <div className="cv">
            <div className="output general-info">
                <h1>General Info</h1>
                <p>{data.general.name}</p>
                <p>{data.general.address}</p>
                <p>{data.general.number}</p>
                <p>{data.general.email}</p>
            </div>
            <div className="output education">
                <h1>Education & Qualifications</h1>
                <p>{data.education.institution}</p>
                <p>{data.education.qualification}</p>
                <p>{data.education.eduStart}</p>
                <p>{data.education.eduEnd}</p>
            </div>
            <div className="output job-experience">
                <h1>Job Experience</h1>
            </div>
        </div>
    );
}
