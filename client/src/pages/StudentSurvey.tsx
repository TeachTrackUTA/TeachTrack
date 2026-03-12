import SurveyLayout from "../components/survey/SurveyLayout"
import SurveySidebar from "../components/survey/SurveySidebar"
import SurveyIntroSidebarContent from "../components/survey/SurveyIntroSideBarContent";
import SurveyIntroCard from "../components/survey/SurveyIntroCard";
import SurveySidebarContent from "../components/survey/SurveySidebarContent";
import type { Step } from "../types/survey";

import { useState } from 'react';


/* Temporary Mock Data */
const SURVEY_DATA = {
    courseCode: 'CSE 1310',
    surveyTitle: 'CSE 1310 Student Learning Outcomes Survey',
    description: 'This evaluation asks you to reflect on what you learned — not to rate your professor. Your honest self-assessment helps improve how this course is taught.',
    userName: 'Quandale D.',
    userRole: 'Computer Science Junior',
    userAvatar: 'https://i.pravatar.cc/150?img=3',
};

const STEPS: { key: Step; label: string }[] = [
    { key: "calibration", label: "Setup" },
    { key: "slo-1", label: "SLO 1" },
    { key: "slo-2", label: "SLO 2" },
    { key: "slo-3", label: "SLO 3" },
    { key: "slo-4", label: "SLO 4" },
    { key: "topic", label: "Topic Confidence" },
    { key: "reflection", label: "Overall Reflection" },
];

export default function StudentSurvey() {
    const [currentStep, setCurrentStep] = useState<Step>("calibration");

    const sidebarContent = {
        "intro": <SurveyIntroSidebarContent surveyTitle={SURVEY_DATA.surveyTitle} description={SURVEY_DATA.description} />,
        "calibration": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-1": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-2": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-3": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-4": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "topic": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "reflection": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
    }[currentStep];

    const mainContent = {
        "intro": <SurveyIntroCard/>,
        "calibration": <div>Main Content Coming Soon!</div>,
        "slo-1": <div>Coming Soon</div>,
        "slo-2": <div>Coming Soon</div>,
        "slo-3": <div>Coming Soon</div>,
        "slo-4": <div>Coming Soon</div>,
        "topic": <div>Coming Soon</div>,
        "reflection": <div>Coming Soon</div>,
    }[currentStep];

    return (
        <SurveyLayout
            sidebar={
                <SurveySidebar
                    courseCode={SURVEY_DATA.courseCode}
                    userName={SURVEY_DATA.userName}
                    userRole={SURVEY_DATA.userRole}
                    userAvatar={SURVEY_DATA.userAvatar}
                    content={sidebarContent}
                />
            }
        >
            {mainContent}
        </SurveyLayout>
    );
}
