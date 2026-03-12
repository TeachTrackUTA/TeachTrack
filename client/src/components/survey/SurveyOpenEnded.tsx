import { useState } from "react";

interface Props {
    prompt: string;
}

export default function SurveyOpenEnded({ prompt }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium text-[var(--color-text-primary)]">Share more (Optional)</h2>
            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={prompt}
                rows={5}
                className="w-full resize-none rounded-lg border-2 border-[var(--color-border-default)] bg-[var(--color-bg-default)] p-4 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-secondary)] transition-colors focus:border-blue-500 focus:outline-none"
            />
            <div className="text-right text-xs text-[var(--color-text-secondary)]">
                {value.length} characters
            </div>
        </div>
    );
}
