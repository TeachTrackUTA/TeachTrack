import SurveyLayout from "../components/survey/layout/SurveyLayout"
import SurveySidebar from "../components/survey/layout/SurveySidebar"
import SurveyIntroSidebarContent from "../components/survey/steps/SurveyIntroSideBarContent";
import SurveyIntroCard from "../components/survey/SurveyIntroCard";

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

type Step = "intro" | "calibration-1" | "calibration-2" | "slo-1" | "slo-2" | "slo-3" | "slo-4" | "topic" | "reflection";

export default function StudentSurvey() {
    const [currentStep, setCurrentStep] = useState<Step>("intro");

    const sidebarContent = {
        "intro": <SurveyIntroSidebarContent surveyTitle={SURVEY_DATA.surveyTitle} description={SURVEY_DATA.description} />,
    }[currentStep];

    const mainContent = {
        "intro": <SurveyIntroCard/>,
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