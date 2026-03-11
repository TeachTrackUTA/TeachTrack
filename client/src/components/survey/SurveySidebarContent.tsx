import type { Step } from "../../types/survey";
import AnonymousBadge from "./AnonymousBadge";
import ProgressCircle from "../ui/ProgressCircle";
import SurveyProgressItem from "./SurveyProgressItem";


interface Props {
    currentStep: Step;
    steps: { key: Step, label: string }[]
}


export default function SurveySidebarContent({ currentStep, steps }: Props) {
    const completedCount = steps.findIndex(s => s.key === currentStep);
    const percent = Math.round((completedCount / steps.length) * 100);

    return (
        <div className="flex flex-col gap-8">
            {/* Progess Circle */}
            <div className="flex justify-center">
                <ProgressCircle
                    percent={percent}
                    label={`${completedCount} out of ${steps.length} Sections Complete`}
                />
            </div>
            
            {/* Survey Progess */}
            <div className="flex flex-col gap-3">
                <span className="text-sm text-[var(--color-text-secondary)]">SURVEY PROGRESS</span>
                <div className="flex flex-col gap-3">
                    {steps.map((step, index) => (
                        <SurveyProgressItem
                            key={step.key}
                            label={step.label}
                            isActive={step.key === currentStep}
                            isComplete={index < completedCount}
                        />
                    ))}
                </div>
            </div>

            {/* Anonymous Alert */}
            <AnonymousBadge />
            
        </div>
    );
}