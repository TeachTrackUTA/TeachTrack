interface Props {
    text: string;
    icon: React.ReactNode;
}

export default function SurveyMetaBadge ({ text, icon }: Props) {
    return (
        <div className="flex items-center gap-3 rounded-xl px-4 py-3 ring-1 ring-[var(--color-border-default)]">
            <div className="text-[var(--color-brand-primary)]">
                {icon}
            </div>
            <span className="text-sm text-[var(--color-text-primary)]">{text}</span>
        </div>
    );
}