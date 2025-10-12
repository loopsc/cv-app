import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import CVPreview from "./components/CVPreview";

function App() {
    const [cvData, setCvData] = useState({
        general: { name: "", address: "", number: "", email: "" },
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
        }
    });

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
                    data={cvData.education}
                    onChange={(newEducation) =>
                        setCvData((prevCvData) => ({
                            ...prevCvData,
                            education: {...prevCvData.education, ...newEducation}
                        }))
                    }
                />
                <WorkExperienceForm 
                    data={cvData.experience}
                    onChange={(newExperience) => 
                        setCvData((prevCvData) => ({
                            ...prevCvData,
                            experience: {...prevCvData.experience, ...newExperience}
                        }))
                    }
                />
            </div>
            <CVPreview data={cvData} />
        </div>
    );
}

export default App;
