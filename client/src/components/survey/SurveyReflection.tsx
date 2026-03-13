import { REFLECTION_DATA } from "../../data/surveyData";
import SurveyMultiSelect from "./SurveyMultiSelect";
import SurveyOpenEnded from "./SurveyOpenEnded";
import SurveyPreparednessLevel from "./SurveyPreparednessLevel";

import { Check } from "lucide-react";

interface Props {
    onNext: () => void;
}

export default function SurveyReflection ({ onNext }: Props) {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-3xl text-[var(--color-text-primary)]">Final Reflection</h2>
                <span className="text-[var(--color-text-secondary)]">Almost done — a few final questions about your overall experience.</span>
            </div>

            <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                <SurveyPreparednessLevel />
            </div>

            <div className="flex flex-col gap-6 rounded-xl shadow-sm bg-[var(--color-bg-default)] p-8 ring-1 ring-[var(--color-border-default)]">
                <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
                    Which areas of this course do you feel LEAST confident in? Select all that apply.
                </h2>
                <SurveyMultiSelect options={REFLECTION_DATA.leastConfidentAreas} />
            </div>
            
            <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                <SurveyOpenEnded prompt={REFLECTION_DATA.changeForLearning.prompt} helperText={REFLECTION_DATA.changeForLearning.helperText} />
            </div>
            <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                <SurveyOpenEnded prompt={REFLECTION_DATA.valuableLearning.prompt} helperText={REFLECTION_DATA.valuableLearning.helperText} />
            </div>
            
            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 rounded-2xl bg-[var(--color-status-success)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                        <Check />
                        Submit Survey
                </button>
            </div>


        </div>
    );
}