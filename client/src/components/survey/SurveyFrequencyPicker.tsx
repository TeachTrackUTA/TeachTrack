import { useState } from "react";

interface Props {
    question: string;
    options: string[];
}

export default function SurveyFrequencyPicker({ question, options }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium text-[var(--color-text-primary)]">{question}</h2>
            <div className="flex flex-col gap-2">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => setSelected(option)}
                        className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-colors ${
                            selected === option
                                ? "border-blue-500 bg-blue-50 text-blue-900"
                                : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                        }`}
                    >
                        <div className={`size-4 shrink-0 rounded-full border-2 ${
                            selected === option
                                ? "border-blue-500 bg-blue-500"
                                : "border-[var(--color-border-default)]"
                        }`} />
                        <span className="text-sm font-medium">{option}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
