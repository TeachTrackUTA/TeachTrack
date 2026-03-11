interface Props {
    percent: number;
    label: string;
}

export default function ProgressCircle({ percent, label}: Props) {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-2">
            <svg width="130" height="130" viewBox="0 0 130 130">
                {/* Background track */}
                <circle cx="65" cy="65" r={radius} fill="none"
                    stroke="var(--color-brand-primary-subtle)" strokeWidth="8" />
                {/* Progress arc */}
                <circle cx="65" cy="65" r={radius} fill="none"
                    stroke="var(--color-brand-primary)" strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 65 65)" />
                {/* Center text */}
                <text x="65" y="70" textAnchor="middle"
                    className="text-sm font-bold" fill="var(--color-brand-primary)">
                    {percent}%
                </text>
            </svg>
            <span className="text-xs text-[var(--color-text-secondary)]">
                {label}
            </span>
        </div>
    );
}