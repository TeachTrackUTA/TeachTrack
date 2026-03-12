import type { SLO } from "../../types/survey";

interface Props {
    slo: SLO;
}

export default function SLOBadge({slo}: Props) {
    return (
        <div className="flex items-start gap-4 rounded-xl bg-[var(--color-bg-default)] p-6 shadow-sm ring-1 ring-[var(--color-border-default)] transition-all hover:shadow-md">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-primary-subtle)]">
                <span className="text-lg font-medium text-[var(--color-brand-primary)]">SLO {slo.id}</span>
            </div>
            <div className="flex flex-1 flex-col gap-2">
                <p className="text-lg leading-relaxed text-[var(--color-text-primary)]">{slo.description}</p>
                <span className="self-start rounded-full px-3 py-1 text-sm font-medium text-[var(--color-brand-primary)] bg-[var(--color-brand-primary-subtle)]">{slo.tag}</span>
            </div>

        </div>
    );
}