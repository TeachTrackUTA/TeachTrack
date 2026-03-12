import { ArrowRight } from 'lucide-react';
import type { Topic } from "../../types/survey";
import { TOPIC_DATA } from '../../data/surveyData';
import { useState } from 'react';


interface Props {
    topic: Topic;
    onNext: () => void;
}

export default function SurveyTopicConfidence( { onNext }: Props ) {
    const [confidence, setConfidence] = useState<Record<string, number>>({});
    const [covered, setCovered] = useState<Record<string, string>>({});

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl text-[var(--color-text-primar)]">Topic-Level Confidence</h2>
                <span className="text-[var(--color-text-secondary)]">Rate your confidence in each topic area covered in CSE 1310. Use the same 1—5 scale.</span>
            </div>

            <div className="flex flex-col gap-6 rounded-xl shadow-sm bg-[var(--color-bg-default)] ring-1 ring-[var(--color-border-default)]">
                <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 gap-y-4 items-center">

                    {/* Headers */}
                    <span className="text-sm font-medium text-[var(--color-text-primary)] pt-4 px-6 flex justify-left">Topic Name</span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)] pt-4 px-6 flex justify-center">Confidence (1-5)</span>
                    <span className="text-sm font-medium text-[var(--color-text-primary)] pt-4 px-6 flex justify-center">Covered in Class?</span>
                    

                    {TOPIC_DATA.map((category) => (
                        <>
                            <div className="text-lg col-span-3 bg-blue-50 text-blue-600 font-medium py-4 px-6">
                                {category.category}
                            </div>
                            
                            {category.topics.map((topic) => (
                                <>
                                    <span className="font-light text-[var(--color-text-primary)] py-3 px-6">{topic.name}</span>
                                    <div className="flex gap-2 py-2 px-3">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button
                                                key={num}
                                                onClick={ () => setConfidence({...confidence, [topic.name]: num})}
                                                className={`size-10 rounded-full border-2 text-sm font-medium transistion-colors ${
                                                    confidence[topic.name] === num
                                                        ? "border-blue-500 bg-blue-500 text-white"
                                                        : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:border-blue-400"
                                                }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 py-2 px-6">
                                        {["Yes", "Partially", "No"].map((option) => (
                                            <button 
                                                key={option}
                                                onClick={ () => setCovered({ ...covered, [topic.name]: option })}
                                                className={`rounded-lg border-2 py-2 px-3 text-sm font-medium transistion-colors ${
                                                    covered[topic.name] === option 
                                                        ? "border-blue-500 bg-blue-50 text-blue-600"
                                                        : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ))}
                        </>
                    ))}
                </div>

            </div>
            <span className="text-[var(--color-text-secondary)]">Select <strong>"No"</strong> if this topic was not addressed at all in your section.</span>
            <div className="flex justify-end">
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 rounded-2xl bg-[var(--color-brand-primary)] px-6 py-4 font-semibold text-[var(--color-brand-primary-on-color)] shadow-sm hover:bg-[var(--color-brand-primary-hover)]">
                        Next: Reflection
                    <ArrowRight/>
                </button>
            </div>


        </div>
    );
}