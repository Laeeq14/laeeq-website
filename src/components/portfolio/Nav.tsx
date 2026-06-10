const links = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#contact", label: "Contact" },
];

export function Nav() {
    return (
        <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a href="#top" className="group flex items-center gap-1.5 font-mono text-base font-bold tracking-tight text-ink">
                    <span className="text-clay">&gt;</span>
                    <span>laeeq.ahd</span>
                    <span className="h-3.5 w-2 bg-clay animate-pulse inline-block align-middle" />
                </a>
                <nav className="hidden gap-8 text-sm text-ink-soft md:flex">
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="transition-colors hover:text-clay">
                            {l.label}
                        </a>
                    ))}
                </nav>
                <a
                    href="mailto:laeeqahd2003@gmail.com"
                    className="hidden rounded-full border border-ink/15 px-4 py-1.5 text-sm text-ink transition-colors hover:border-clay hover:text-clay sm:inline-block"
                >
                    Say hello
                </a>
            </div>
        </header>
    );
}