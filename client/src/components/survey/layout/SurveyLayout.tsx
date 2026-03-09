interface Props {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

export default function SurveyLayout ({ sidebar, children }: Props ) {
    return (
        <div className="flex h-screen">
            <aside className="w-[430px] overflow-y-auto shadow-[4px_0_12px_rgba(0,0,0,0.8)]">
                {sidebar}
            </aside>
            <main className="flex-1 overflow-y-auto bg-[var(--color-bg-subtle)]">
                {children}
            </main>
        </div>
    );
}