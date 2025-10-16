import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CVPreview from "./components/CVPreview";

function App() {
    const [cvData, setCvData] = useState({
        general: { name: "", address: "", number: "", email: "" },
        education: [],
        experience: [],
    });

    // Temp storage before adding to CV
    const [formData, setFormData] = useState({
        education: {
            institution: "",
            qualification: "",
            eduStart: "",
            eduEnd: "",
        },
        experience: {
            company: "",
            position: "",
            responsibilities: "",
            workStart: "",
            workEnd: "",
        },
    });

    // Update data in formData
    const handleFormChange = (section, newData) => {
        setFormData((prev) => ({
            ...prev,
            [section]: { ...prev[section], ...newData },
        }));
    };

    // Publish data from formData to cvData
    const handleAddEntry = (section) => {
        // State updater function
        // Update cvData only with new content incoming from formData
        setCvData((prev) => ({
            ...prev,
            [section]: [...prev[section], formData[section]],
        }));
        // reset draft form
        setFormData((prev) => ({
            ...prev, //Copy data from the previous formData
            // Reform section back into an object after executing the code.
            [section]: Object.fromEntries(
                // Grab an array of all the data inside a section and assign them with an empty string as a value.
                Object.keys(prev[section]).map((k) => [k, ""])
            ),
        }));
    };

    return (
        <div className="container">
            <div className="form">
                <GeneralInfoForm
                    data={cvData.general}
                    onChange={(newGeneral) =>
                        setCvData((prevCvData) => ({
                            ...prevCvData,
                            general: { ...prevCvData.general, ...newGeneral },
                        }))
                    }
                />

                <EducationForm
                    data={formData.education}
                    onChange={(newEdu) => handleFormChange("education", newEdu)}
                    onAdd={() => handleAddEntry("education")}
                />

                <WorkExperienceForm
                    data={formData.experience}
                    onChange={(newExp) =>
                        handleFormChange("experience", newExp)
                    }
                    onAdd={() => handleAddEntry("experience")}
                />
            </div>
            <CVPreview data={cvData} />
        </div>
    );
}

export default App;
