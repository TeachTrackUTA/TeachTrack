import { ShieldCheck } from "lucide-react";

export default function AnonymousBadge () {
    return (
        <div className="flex gap-4 rounded-2xl p-4 bg-[var(--color-brand-primary-subtle)]">
            <ShieldCheck className="size-6 shrink-0 text-[var(--color-brand-primary)]" />
            <div className="flex flex-col gap-1">
                <span className="font-medium text-[var(--color-text-primary)]">100% Anonymous</span>
                <p className="text-sm text-[var(--color-text-secondary)]">Your responses are completely anonymous and cannot be linked to your identity or grades. 
                  No personal information is collected or stored.</p>
            </div>
        </div>
    )
}