import { ChevronRight, ArrowRight, ArrowLeft } from "lucide-react";
import type { SLO } from "../../types/survey";
import { useState } from "react";
import ConfidenceLevel from "./SurveyConfidenceLevel";
import SurveyActivityPicker from "./SurveyActivityPicker";
import SurveyFrequencyPicker from "./SurveyFrequencyPicker";
import SurveyOpenEnded from "./SurveyOpenEnded";
import SurveyQuickCheck from "./SurveyQuickCheck";

interface Props {
    slo: SLO;
    onNext: () => void;
    onPrev: () => void;
}


export default function SurveyQuestion({ slo, onNext, onPrev }: Props) {
    const [showExplanation, setShowExplanation] = useState(false);
    return (
        <div className="flex flex-1 items-start justify-center overflow-y-auto p-12">
            <div className="w-full max-w-[900px] space-y-8">
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium text-[var(--color-text-secondary)]">
                        SLO {slo.id} of 4 - {slo.shortDescription}
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700">
                            {slo.tag}
                        </div>
                    </div>
                    <h1 className="text-2xl font-medium leading-relaxed text-[var(--color-text-primary)]">
                        {slo.description}
                    </h1>
                    <button 
                        onClick={ () => setShowExplanation(!showExplanation)}
                        className="flex items-center gap-2 text-sm font-medium text-[var(--color-brand-primary)] transistion-colors hover:text-[var(--color-brand-primary-hover)]">
                            What does this mean?
                            <ChevronRight className={`size-4 transistion-transform ${showExplanation ? "rotate-90" : ""}`} />
                    </button>
                    {showExplanation && (
                        <div className="rounded-lg bg-[var(--color-brand-primary-subtle)] p-4 text-sm leading-relaxed text-[var(--color-text-primary)]">
                            {slo.fullDescription}
                        </div>
                    )}
                </div>

                {/* Confidence Question */}
                <div className="flex flex-col gap-6 rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                    <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
                        {slo.confidenceQuestion}
                    </h2>
                    
                    <div className="text-center">
                        <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                            Confidence Level
                        </span>
                    </div>

                    <div className="flex justify-between gap-2">
                        <ConfidenceLevel />
                    </div>
                </div>

                {/* Quick Check (Conditionally Rendered) */}
                {slo.quickCheck && (
                    <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                        <SurveyQuickCheck quickCheck={slo.quickCheck} />
                    </div>
                )}
                
                {/* Activities Question */}
                <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                    <SurveyActivityPicker activities={slo.activities} />
                </div>

                {/* Frequency Question */}
                <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                    <SurveyFrequencyPicker question={slo.frequencyQuestion} options={slo.frequencyOptions} />
                </div>

                {/* Open-Ended Section */}
                <div className="flex flex-col rounded-xl bg-[var(--color-bg-default)] p-8 shadow-sm ring-1 ring-[var(--color-border-default)]">
                    <SurveyOpenEnded prompt={slo.openEndedPrompt} />
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-start">
                        <button
                            onClick={onPrev}
                            className="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-primary)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                                <ArrowLeft/>
                                Back
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={onNext}
                            className="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-primary)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                                Next: SLO {slo.id + 1}
                            <ArrowRight/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}