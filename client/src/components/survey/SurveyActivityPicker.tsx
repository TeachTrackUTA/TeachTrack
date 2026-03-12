import { useState } from "react";
import { BookOpen, Users, Clock, Video, MessageCircle, Bug, CodeXml, BookMarked, Info } from "lucide-react";
import type { Activity } from "../../types/survey";


const ICON_MAP: Record<string, React.ElementType> = {
    BookOpen, 
    Users, 
    Clock,
    Video,
    MessageCircle,
    Bug,
    CodeXml,
    BookMarked,
    Info
};

interface Props {
    activities: Activity[];
}

export default function SurveyActivityPicker ({ activities }: Props) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (label: string) => {
        setSelected((prev) =>
            prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
        );
    };

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium text-[var(--color-text-primary)]">
                Which activities helped you develop this skill the most? Select all that apply.
            </h2>
            <div className="grid grid-cols-2 gap-3">
                {activities.map((activity) => {
                    const Icon = ICON_MAP[activity.icon];
                    const isSelected = selected.includes(activity.label);
                    return (
                        <button
                            key={activity.label}
                            onClick={() => toggle(activity.label)}
                            className={`flex items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-colors ${
                                isSelected
                                    ? "border-blue-500 bg-blue-50 text-blue-900"
                                    : "border-[var(--color-border-default)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                            }`}
                        >
                            {Icon && (
                                <Icon className={`size-5 ${isSelected ? "text-blue-500" : "text-[var(--color-text-secondary)]"}`} />
                            )}
                            <span className="text-sm font-medium">{activity.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}