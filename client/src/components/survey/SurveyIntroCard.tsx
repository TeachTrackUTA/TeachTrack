import SurveyCourseHeader from "./SurveyCourseHeader";
import SurveyMetaBadge from "./SurveyMetaBadge";
import SLOStepper from "./SLOStepper";
import Badge from "../ui/Badge";

import { Clock, ClipboardList } from 'lucide-react';


interface Props {
    onBegin: () => void;
}

const SURVEY_DATA = {
    semester: "Spring 2026 | Section 003",
    courseTitle: "CSE 1310 - Intro to Computers & Programming",
    instructor: "Professor Donna French"
};

export default function SurveyIntroCard ({ onBegin }: Props) {
    return (
        <div className="w-full max-w-[800px] space-y-6 rounded-2xl bg-[var(--color-bg-default)] p-8 shadow-md">
            <SurveyCourseHeader
                semester={SURVEY_DATA.semester}
                courseTitle={SURVEY_DATA.courseTitle}
                instructor={SURVEY_DATA.instructor}
            />
            <hr className="border-[var(--color-border-default)]" />
            <div className="flex gap-3">
                <SurveyMetaBadge icon={<Clock size={16} />} text="~10 Minutes" />
                <SurveyMetaBadge icon={<ClipboardList size={16} />} text="~4 Learning Outcomes" />
            </div>
            <SLOStepper steps={[
                { label: "SLO 1", status: 'not_started'},
                { label: "SLO 2", status: 'not_started'},
                { label: "SLO 3", status: 'not_started'},
                { label: "SLO 4", status: 'not_started'},
            ]} />
            <Badge variant="alert" title="100% Anonymous" body="Your responses are completely anonymous and cannot be linked to your identity or grades. No personal information is collected or stored."/>
            <div className="flex justify-end">
                <button
                    onClick={onBegin}
                    className="flex justify-end rounded-2xl bg-[var(--color-brand-primary)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                        Begin Evaluation
                </button>
            </div>
        </div>
    );
}