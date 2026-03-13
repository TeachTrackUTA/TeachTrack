import { useState } from "react";

interface Props {
    onClick: () => void;
    selected: boolean;
}

const LEVELS =  [
        { 
            value: 1, 
            label: "Not Prepared",
            description: "I lack understanding of key concepts and expect to struggle in CSE 1320"
        },
        { 
            value: 2, 
            label: "Minimally Prepared",
            description: "I understand some concepts but need help applying them independently"
        },
        { 
            value: 3, 
            label: "Somewhat Prepared",
            description: "I understand most concepts but expect some challenges with harder material"
        },
        { 
            value: 4, 
            label: "Well Prepared",
            description: "I have solid understanding of the concepts and feel ready for more challenging material"
        },
        { 
            value: 5, 
            label: "Extremely Well Prepared",
            description: "I've mastered the core concepts and am ready to excel in CSE 1320"
        }
    ];

export default function SurveyPreparednessLevel () {
    const [selected, setSelected] = useState<number | null>(null);
    return (
        <div className="flex gap-4">
            {LEVELS.map( (level)  => (
                <button 
                    key={level.value}
                    onClick={ () => setSelected(level.value)}
                    className={`flex flex-col items-center gap-2 rounded-lg p-4 transistion-all hover:bg-[var(--color-bg-subtle)] ${
                        selected  === level.value 
                        ? "ring-2 ring-[var(--color-brand-primary)]" 
                        : ""
                    }`}
                >
                    <div 
                        className={`flex size-[70px] items-center justify-center rounded-full border-2 transistion-all ${
                            selected  === level.value 
                            ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)]" 
                            : "border-[var(--color-border-default)]" 
                        }`}
                    >
                        <span className="text-3xl font-medium text-[var(--color-text-primary)]">{level.value}</span>
                    </div>
                    <div className="text-base font-medium text-[var(--color-text-primary)]">{level.label}</div>
                    <p className="max-w-[150px] text-center text-xs leading-relaxed text-[var(--color-text-secondary)]">{level.description}</p>
                
                </button>
            ))}
        </div>
    );
}