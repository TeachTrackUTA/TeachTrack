import React from 'react'; 

type SloStatus = "not_started" | "in_progress" | "completed";

type SloStep = {
    label: string;
    status: SloStatus;
};

interface Props {
    steps: SloStep[];
}

export default function SLOStepper ({ steps }: Props ) {
    return (
        <div className="flex items-center justify-center gap-0 py-8">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex w-9 h-9 items-center justify-center rounded-full border-2 border-[var(--color-brand-primary)]">
                            <div className="w-4 h-4 rounded-full border-2 border-[var(--color-brand-primary)]" />
                        </div>
                        <div className="text-lg text-[var(--color-text-primary)]">{step.label}</div>
                        <div className="text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">{step.status}</div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex-1 h-[2px] bg-[var(--color-brand-primary)] self-start mt-[18px]" />
                    )}
                    
                </React.Fragment>
                
            ))}
            
        </div>
    );
}