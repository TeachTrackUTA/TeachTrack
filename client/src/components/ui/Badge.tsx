import { ShieldCheck, ShieldX, Info, ShieldAlert} from "lucide-react";

interface Props {
    variant?: "alert" | "success" | "warning" | "error";
    title?: string;
    body?: string;
}

export default function Badge ({title, body, variant}: Props) {

    const configs = {
        alert: { bgColor: "bg-[var(--color-brand-primary-subtle)]", textColor: "text-[var(--color-brand-primary)]", icon: Info },
        success: { bgColor: "bg-[var(--color-status-success-bg)]", textColor: "text-[var(--color-status-success)]", icon: ShieldCheck },
        warning: { bgColor: "bg-[var(--color-status-warning-bg)]", textColor: "text-[var(--color-status-warning)]", icon: ShieldAlert },
        error: { bgColor: "bg-[var(--color-status-error-bg)]", textColor: "text-[var(--color-status-error)]", icon: ShieldX }
    };

    const active = configs[variant ?? "alert"];
    const Icon = active.icon;
    const titleShown = !!title;

    return (
        <div className={`flex gap-4 rounded-2xl p-4 ${active.bgColor}`}>
            <Icon className={`size-6 shrink-0 ${active.textColor}`}/>
            <div className="flex flex-col gap-1">
                {titleShown ? (
                    <>
                        <span className={`font-medium ${active.textColor}`}>{title}</span>
                        <p className="text-sm text-[var(--color-text-secondary)]">{body}</p>
                    </>
                ) : (
                    <p className="text-sm text-[var(--color-text-secondary)]">{body}</p>
                )}
            </div>
        </div>
    )
}
