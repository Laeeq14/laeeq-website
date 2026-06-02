export function Footer() {
    return (
        <footer className="border-t border-border/60">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-ink-soft md:flex-row md:items-center">
                <p>© {new Date().getFullYear()} Laeeq Ahmed Fazil. Built with care in Minneapolis.</p>
                <p className="text-xs text-ink-soft/70">
                    Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
            </div>
        </footer>
    );
}