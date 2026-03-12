interface Props {
    label: string;
    isActive: boolean;
    isComplete: boolean;
}

export default function SurveyProgressItem ({label, isActive, isComplete}: Props) {
    return (
        <button 
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                isActive ? 'bg-[var(--color-brand-primary-subtle)] text-[var(--color-brand-primary)]' 
                : 'hover:bg-[var(--color-bg-subtle)]'
            }`}
        >
            <div 
                className={`flex size-5 items-center justify-center rounded-full border-2 ${
                    isActive
                        ? 'border-[var(--color-brand-primary)]'
                        : isComplete
                        ? 'bg-[var(--color-brand-primary)]'
                        : 'border-[var(--color-border-default)]'
                }`}
            >
                {isComplete && <div className="size-2 rounded-full bg-white" />}
            </div>
            <span className="font-medium">{label}</span>
        </button>
    );
}