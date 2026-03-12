import { useState } from "react";

interface Props {
    onClick: () => void;
    selected: boolean;
}

const LEVELS = [
    {
        value: 1,
        label: "Not at all",
        description: "I cannot do this even with guidance or examples"
    }, 
    {
        value: 2,
        label: "Slightly",
        description: "I can attempt this but need significant help to get it right"
    },
    {
        value: 3,
        label: "Moderately",
        description: "I can do this with some reference materials or minor help"
    },
    {
        value: 4,
        label: "Considerably",
        description: "I can do this independently in familiar situations"
    },
    {
        value: 5,
        label: "Extensively",
        description: "I can do this confidently in new or unfamiliar problems"
    }
];

export default function ConfidenceLevel () {
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