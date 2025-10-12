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
                <p>{"Institution: " + data.education.institution}</p>
                <p>{"Qualification: " + data.education.qualification}</p>
                <p>{"Start: " + data.education.eduStart}</p>
                <p>{"End: " + data.education.eduEnd}</p>
            </div>
            <div className="output job-experience">
                <h1>Job Experience</h1>
                <p>{"Compnay: " + data.experience.company}</p>
                <p>{"Position: " + data.experience.position}</p>
                <p>{"Responibilities: " + data.experience.responsibilities}</p>
                <p>{"Start: " + data.experience.workStart}</p>
                <p>{"End: " + data.experience.workEnd}</p>
            </div>
        </div>
    );
}
