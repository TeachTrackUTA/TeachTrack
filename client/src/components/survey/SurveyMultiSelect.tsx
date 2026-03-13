import { Check } from "lucide-react";
import { useState } from "react";

interface Props {
    options: string[];
}

export default function SurveyMultiSelect({ options }: Props) {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    function toggle(value: string) {
        setSelected((prev) => {
            const next = new Set(prev);
            if (next.has(value)) next.delete(value);
            else next.add(value);
            return next;
        });
    }

    return (
        <div className="flex flex-wrap gap-3">
            {options.map((option) => {
                const isSelected = selected.has(option);
                return (
                    <button
                        key={option}
                        onClick={() => toggle(option)}
                        className={`flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                            isSelected
                                ? "border-blue-500 bg-blue-50 text-blue-600"
                                : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                        }`}
                    >
                        {isSelected && <Check size={14} strokeWidth={2.5} />}
                        {option}
                    </button>
                );
            })}
        </div>
    );
}
