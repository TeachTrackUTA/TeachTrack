import { SLO_DATA } from "../../data/surveyData";
import SLOBadge from "./SLOBadge";
import { ArrowRight } from "lucide-react";

interface Props {
    onNext: () => void;
}


export default function SurveyCalibration({onNext}: Props) {
    return (
        <div className="flex flex-col gap-6 p-4">
            <h2 className="text-3xl text-[var(--color-text-primary)]">Here’s what you’ll be evaluating.</h2>
            <span className="text-[var(--color-text-secondary)]">This course has 4 core learning outcomes. We'll walk through each one, plus ask about specific topics.</span>
            {SLO_DATA.map((slo) => (
                <SLOBadge slo={slo} />
            ))}
            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-primary)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                        Start Survey
                    <ArrowRight/>
                </button>
            </div>
        </div>
    );
}