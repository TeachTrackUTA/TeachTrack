import SurveyLayout from "../components/survey/SurveyLayout"
import SurveySidebar from "../components/survey/SurveySidebar"
import SurveyIntroSidebarContent from "../components/survey/SurveyIntroSideBarContent";
import SurveySidebarContent from "../components/survey/SurveySidebarContent";
import SurveyIntroCard from "../components/survey/SurveyIntroCard";
import SurveyCalibration from "../components/survey/SurveyCalibration";
import SurveyQuestion from "../components/survey/SurveyQuestion";
import SurveyTopicConfidence from "../components/survey/SurveyTopicConfidence";
import { SLO_DATA, COURSE_DATA, TOPIC_DATA, STUDENT_DATA } from "../data/surveyData";

import type { Step } from "../types/survey";

import { useState } from 'react';


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
    const [currentStep, setCurrentStep] = useState<Step>("topic");
    const sloKeys = ["slo-1", "slo-2", "slo-3", "slo-4"] as const;
    const sloIndex = sloKeys.indexOf(currentStep as typeof sloKeys[number]);
    const currentSLO = sloIndex >= 0 ? SLO_DATA[sloIndex] : null;

    const sidebarContent = {
        "intro": <SurveyIntroSidebarContent surveyTitle={COURSE_DATA.surveyTitle} description={COURSE_DATA.surveyDescription} />,
        "calibration": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-1": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-2": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-3": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "slo-4": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "topic": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
        "reflection": <SurveySidebarContent currentStep={currentStep} steps={STEPS} />,
    }[currentStep];

    const mainContent = {
        "intro": <SurveyIntroCard onBegin={ () => setCurrentStep("calibration")}/>,
        "calibration": <SurveyCalibration onNext={ () => setCurrentStep("slo-1")}/>,
        "slo-1": currentSLO ? <SurveyQuestion slo={currentSLO} onNext={ () => setCurrentStep("slo-2")} onPrev={() => setCurrentStep("calibration")} /> : null,
        "slo-2": currentSLO ? <SurveyQuestion slo={currentSLO} onNext={ () => setCurrentStep("slo-3")} onPrev={() => setCurrentStep("slo-1")} /> : null,
        "slo-3": currentSLO ? <SurveyQuestion slo={currentSLO} onNext={ () => setCurrentStep("slo-4")} onPrev={() => setCurrentStep("slo-2")} /> : null,
        "slo-4": currentSLO ? <SurveyQuestion slo={currentSLO} onNext={ () => setCurrentStep("topic")} onPrev={() => setCurrentStep("slo-3")} /> : null,
        "topic": <SurveyTopicConfidence onNext={ () => setCurrentStep("reflection")}/>,
        "reflection": <div>Coming Soon</div>,
    }[currentStep];

    return (
        <SurveyLayout
            sidebar={
                <SurveySidebar
                    courseCode={COURSE_DATA.courseCode}
                    userName={STUDENT_DATA.userName}
                    userRole={STUDENT_DATA.userRole}
                    userAvatar={STUDENT_DATA.profile}
                    content={sidebarContent}
                />
            }
        >
            {mainContent}
        </SurveyLayout>
    );
}
