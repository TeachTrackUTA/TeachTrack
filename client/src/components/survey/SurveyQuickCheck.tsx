import { useState } from "react";
import { Zap } from "lucide-react";
import type { QuickCheck } from "../../types/survey";

interface Props {
    quickCheck: QuickCheck;
}

export default function SurveyQuickCheck({ quickCheck }: Props) {
    const [scratchWork, setScratchWork] = useState("");
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
                    Let's test this with a real example.
                </h2>
                <div className="flex items-center gap-2 rounded-full bg-[var(--color-brand-primary)] px-4 py-2">
                    <Zap className="size-4 text-[var(--color-brand-primary-on-color)]" />
                    <span className="text-sm font-semibold text-[var(--color-brand-primary-on-color)]">Quick Check</span>
                </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)]">
                This doesn't affect your grade — it helps us connect confidence with understanding.
            </p>

            <div className="overflow-hidden rounded-lg bg-slate-900">
                <pre className="p-6 font-mono text-sm leading-relaxed text-gray-100">
                    <code>{quickCheck.code}</code>
                </pre>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-base font-medium text-[var(--color-text-primary)]">
                    {quickCheck.question}
                </h3>

                {quickCheck.scratchPad && (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-[var(--color-text-secondary)]">
                            Use this space as scratch paper to work through the problem:
                        </label>
                        <textarea
                            value={scratchWork}
                            onChange={(e) => setScratchWork(e.target.value)}
                            placeholder="Work through the loop iteration here... (this is just for your use, not submitted for grading)"
                            rows={3}
                            className="w-full resize-none rounded-lg border-2 border-[var(--color-border-default)] bg-[var(--color-bg-subtle)] px-4 py-3 font-mono text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] transition-colors focus:border-blue-500 focus:outline-none"
                        />
                    </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                    {quickCheck.options.map((option) => (
                        <button
                            key={option.label}
                            onClick={() => setSelected(option.label)}
                            className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-colors ${
                                selected === option.label
                                    ? "border-blue-500 bg-blue-50 text-blue-900"
                                    : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                            }`}
                        >
                            <div className={`size-5 shrink-0 rounded-full border-2 ${
                                selected === option.label
                                    ? "border-blue-500 bg-blue-500"
                                    : "border-[var(--color-border-default)]"
                            }`} />
                            <span className="text-sm font-medium">{option.label}: {option.value}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
